const express = require("express");

const BlogRouter = express.Router();

// export the blog model
const blog = require("../models/blog");

BlogRouter.get("/:uid", (req, res, next) => {
    blog.find({ userID: req.params.uid })
        .sort({ createdAt: -1 })
        .then((blogs) => res.json(blogs));
});
BlogRouter.get("/:uid/:id", (req, res, next) => {
    blog.findById(req.params.id).then((blog) => res.json(blog));
});
BlogRouter.post("/", (req, res, next) => {
    const newBlog = new blog({
        title: req.body.title,
        difficulty: req.body.difficulty,
        topic: req.body.topic,
        url: req.body.url,
        question: req.body.question,
        solution: req.body.solution,
        language: req.body.language,
        selected_language: req.body.selected_language,
        code: req.body.code,
        userID: req.body.userID,
    });
    newBlog
        .save()
        .then((blog) => res.json(blog))
        .catch((err) => res.status(404));
});
BlogRouter.put("/:id", (req, res, next) => {
    blog.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    ).then((blog) => res.json(blog));
});
BlogRouter.delete("/:uid/:id", (req, res, next) => {
    blog.findById(req.params.id)
        .then((blog) => blog.remove().then(() => res.status(200)))
        .catch((err) => res.status(404));
});

module.exports = BlogRouter;
