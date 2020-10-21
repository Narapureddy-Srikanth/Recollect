const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB config
const db = require("./config/keys").mongoURI;

// connect with DB
mongoose
    .connect(db)
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
