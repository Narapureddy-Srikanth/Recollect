import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aboutus from "./components/About/Aboutus";
import Blogs from "./components/Blogs/Blogs";
import BlogView from "./components/Blogs/BlogView";
import BlogCreate from "./components/Blogs/BlogCreate";
import BlogEdit from "./components/Blogs/BlogEdit";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/aboutus" component={Aboutus} />
                    <Route exact path="/blogs" component={Blogs} />
                    <Route exact path="/blogs/view/:id" component={BlogView} />
                    <Route exact path="/blogs/add" component={BlogCreate} />
                    <Route exact path="/blogs/edit/:id" component={BlogEdit} />
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
