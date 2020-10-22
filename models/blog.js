const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating a Schema
const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    difficulty: {
        type: String,
        required: true,
    },
    topic: {
        type: String,
        required: true,
    },
    url: {
        type: String,
    },
    question: {
        type: String,
    },
    solution: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

var Blogs = mongoose.model("Blog", BlogSchema);

module.exports = Blogs;
