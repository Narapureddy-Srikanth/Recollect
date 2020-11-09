const express = require("express");

const ListRoutes = express.Router();

// export the blog model
const ProblemsList = require("../models/problemslist");

ListRoutes.get("/", (req, res, next) => {
    ProblemsList.find()
        .then((lists) => res.json(lists))
        .catch((err) => next(err));
});

module.exports = ListRoutes;
