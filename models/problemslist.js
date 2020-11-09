const db = require("../config/keys").mongoURI;

const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.connect(db);
const dataSchema = new mongoose.Schema({});
const dataModel = mongoose.model("ProblemsList", dataSchema, "problemslist");
module.exports = dataModel;
