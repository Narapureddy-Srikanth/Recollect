const express = require("express");
const mongoose = require("mongoose");

// Routes
const blogs = require("./routes/blogs");

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

// Use Routes
app.use("/blogs", blogs);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
