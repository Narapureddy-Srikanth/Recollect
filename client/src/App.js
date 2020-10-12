import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.js";
import Header from "./components/Header.js";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact to="/" component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
