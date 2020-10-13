import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import $ from "jquery";

ReactDOM.render(<App />, document.getElementById("root"));

$(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
});
