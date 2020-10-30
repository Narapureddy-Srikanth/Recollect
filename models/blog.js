const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating a Schema
const BlogSchema = new Schema(
    {
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
            required: true,
        },
        question: {
            type: String,
        },
        solution: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

var Blogs = mongoose.model("Blog", BlogSchema);

module.exports = Blogs;
