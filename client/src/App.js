import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Aboutus from "./components/Aboutus.js";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/aboutus" component={Aboutus} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </BrowserRouter>
        );
    }
}

export default App;
