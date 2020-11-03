const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const keys = require("./config/keys");

// sessions
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

// cookies
const cookieParser = require("cookie-parser");

// Routes
const users = require("./routes/users");
const blogs = require("./routes/blogs");

const app = express();

// Bodyparser Middleware
app.use(express.json());

// Cross-origin resource sharing (CORS)
var cors = require("cors");
const { use } = require("./routes/users");

app.use(cors()); // Use this after the variable declaration

// DB config
const db = keys.mongoURI;

// connect with DB
mongoose
    .connect(db)
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err));

app.use(
    session({
        name: "session-id",
        secret: keys.SessionsSecretKey,
        saveUninitialized: false,
        resave: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
);

app.use(cookieParser("14251-11221"));

app.use("/user", users);

function auth(req, res, next) {
    if (!req.session.user) {
        var err = new Error("You are not authenticated!");
        err.status = 403;
        return next(err);
    } else {
        if (req.session.user === "authenticated") {
            next();
        } else {
            var err = new Error("You are not authenticated!");
            err.status = 403;
            return next(err);
        }
    }
}

app.use(auth);

// Use Routes
app.use("/blogs", blogs);

// Server Static asserts if in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

// error handle
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.send(err.message); //this or res.status(err.status || 500).send('error')
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
