const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating user Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

var Users = mongoose.model("User", UserSchema);

module.exports = Users;
