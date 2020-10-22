import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Aboutus from "./components/Aboutus.js";
import Blogs from "./components/Blogs.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/aboutus" component={Aboutus} />
                    <Route exact path="/blogs" component={Blogs} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </BrowserRouter>
        );
    }
}

export default App;
