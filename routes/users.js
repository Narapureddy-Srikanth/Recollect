const express = require("express");

const UserRouter = express.Router();

// export the blog model
const User = require("../models/user");

UserRouter.post("/signup", (req, res, next) => {
    if (req.body.password !== req.body.confirm_password) {
        let err = new Error("password and confirm password not same");
        err.status = 403;
        return next(err);
    }
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (user !== null) {
                let err = new Error(
                    "Email " + req.body.email + " already exists..."
                );
                err.status = 403;
                next(err);
            } else {
                return User.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                });
            }
        })
        .then((user) => {
            req.session.user = "authenticated";

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");

            // set cookies
            res.cookie("name", user.name, { signed: true });
            res.cookie("userID", user._id, { signed: true });
            res.json({
                status: "Registration Successfull",
                name: user.name,
                userID: user._id,
            });
        })
        .catch((err) => next(err));
});

UserRouter.post("/login", (req, res, next) => {
    if (!req.session.user) {
        var authHeader = req.headers.authorization;

        if (!authHeader) {
            var err = new Error("You are not authenticated!");
            err.status = 401;
            return next(err);
        }

        var auth = new Buffer.from(authHeader.split(" ")[1], "base64")
            .toString()
            .split(":");

        var email = auth[0];
        var password = auth[1];

        User.findOne({ email: email })
            .then((user) => {
                if (user !== null) {
                    if (user.password !== password) {
                        let err = new Error("Your password is incorrect!");
                        err.status = 403;
                        return next(err);
                    } else if (
                        user.password === password &&
                        user.email === email
                    ) {
                        req.session.user = "authenticated";
                        res.statusCode = 200;
                        res.setHeader("Content-Type", "application/json");
                        // set cookies
                        res.cookie("name", user.name, { signed: true });
                        res.cookie("userID", user._id, { signed: true });
                        res.json({ name: user.name, userID: user._id });
                    }
                } else {
                    let err = new Error("email " + email + " not exists!");
                    err.status = 403;
                    return next(err);
                }
            })
            .catch((err) => next(err));
    } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text-plain");
        res.end("You are already authenticated!");
    }
});

UserRouter.get("/loggedin", (req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    var name = req.signedCookies.name;
    var ID = req.signedCookies.userID;
    if (req.session.user) {
        res.json({ loggedin: true, name: name, userID: ID });
    } else {
        res.json({ loggedin: false, name: "", userID: "" });
    }
});

UserRouter.get("/logout", (req, res, next) => {
    if (req.session) {
        req.session.destroy();
        res.clearCookie("session-id");
        res.clearCookie("name");
        res.clearCookie("userID");
    } else {
        var err = new Error("You are not logged in!");
        err.status = 403;
        next(err);
    }
});

module.exports = UserRouter;
