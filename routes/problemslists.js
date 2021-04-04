const express = require("express");

const ListRoutes = express.Router();

// export the blog model
const ProblemsList = require("../models/problemslist");

ListRoutes.get("/:search", (req, res, next) => {
    ProblemsList.find({
        $or: [
            { name: { $regex: req.params.search, $options: "$i" } },
            { topic: { $regex: req.params.search, $options: "$i" } },
        ],
    })
        .then((lists) => res.json(lists))
        .catch((err) => next(err));
});
ListRoutes.get("/", (req, res, next) => {
    ProblemsList.find()
        .then((lists) => res.json(lists))
        .catch((err) => next(err));
});

module.exports = ListRoutes;
