const express = require("express");
const mongoose = require("mongoose");

// Routes
const blogs = require("./routes/blogs");

const app = express();

// Bodyparser Middleware
app.use(express.json());

// Cross-origin resource sharing (CORS)
var cors = require("cors");

app.use(cors()); // Use this after the variable declaration

// DB config
const db = require("./config/keys").mongoURI;

// connect with DB
mongoose
    .connect(db)
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err));

// Use Routes
app.use("/blogs", blogs);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
