const express = require("express");
const BlogRouter = express.Router();

// export the blog model
const blog = require("../models/blog");

BlogRouter.get("/", (req, res, next) => {
    blog.find()
        .sort({ date: -1 })
        .then((blogs) => res.json(blogs));
});
BlogRouter.post("/", (req, res, next) => {
    const newBlog = new blog({
        title: req.body.title,
        difficulty: req.body.difficulty,
        topic: req.body.topic,
        url: req.body.url,
        question: req.body.question,
        solution: req.body.solution,
    });

    newBlog
        .save()
        .then((blog) => res.json(blog))
        .catch((err) => console.log(err));
});
BlogRouter.delete("/:id", (req, res, next) => {
    blog.findById(req.params.id)
        .then((blog) => blog.remove().then(() => res.json({ success: true })))
        .catch((err) => res.status(404).json({ success: false }));
});

module.exports = BlogRouter;
