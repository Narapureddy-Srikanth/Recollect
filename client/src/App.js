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
import Main from "./components/Header/Main";
import ProblemsList from "./components/Problems/ProblemsList";
import Loading from "./components/Header/Loading";
import axios from "axios";

class App extends Component {
    constructor() {
        super();

        this.state = {
            loggedInStatus: "Not_Logged_In",
            name: "",
            LoginLogoutdetails: "",
            userID: "",
            loading: false,
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1000);

        axios
            .get("/user/loggedin", {
                withCredentials: true,
            })
            .then((res) => {
                if (res.data.loggedin === true) {
                    this.setState({
                        loggedInStatus: "Logged_In",
                        name: res.data.name,
                        userID: res.data.userID,
                    });
                }
            });
    }

    handleLogin(name, ID) {
        this.setState({
            loggedInStatus: "Logged_In",
            name: name,
            userID: ID,
            LoginLogoutdetails: "Login Successful",
        });
    }

    handleLogout() {
        this.setState({
            loggedInStatus: "Not_Logged_In",
            name: "",
            LoginLogoutdetails: "Logout Successful",
        });
    }

    render() {
        return (
            <BrowserRouter>
                {this.state.loading === true ? (
                    <Loading />
                ) : (
                    <section>
                        <Header
                            loggedInStatus={this.state.loggedInStatus}
                            name={this.state.name}
                            handleLogout={this.handleLogout}
                        />
                        {this.state.loggedInStatus === "Logged_In" ? (
                            <Main
                                text="Login Successful"
                                bgcolor="bg-success"
                                textcolor="text-light"
                                ClearStatesOnRemove={() => {}}
                            />
                        ) : (
                            <React.Fragment></React.Fragment>
                        )}
                        <Switch>
                            <Route exact path="/client/" component={Home} />
                            {/* <Route exact path="/client/aboutus" component={Aboutus} /> */}
                            <Route
                                exact
                                path="/client/blogs"
                                render={(props) => (
                                    <Blogs
                                        {...props}
                                        userID={this.state.userID}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/client/blogs/view/:id"
                                render={(props) => (
                                    <BlogView
                                        {...props}
                                        userID={this.state.userID}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/client/blogs/add"
                                render={(props) => (
                                    <BlogCreate
                                        {...props}
                                        userID={this.state.userID}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/client/blogs/edit/:id"
                                render={(props) => (
                                    <BlogEdit
                                        {...props}
                                        userID={this.state.userID}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/client/login"
                                render={(props) => (
                                    <Login
                                        {...props}
                                        loggedInStatus={
                                            this.state.loggedInStatus
                                        }
                                        handleLogin={this.handleLogin}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/client/problemslist"
                                render={(props) => (
                                    <ProblemsList
                                        {...props}
                                        userID={this.state.userID}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/client/signup"
                                render={(props) => (
                                    <Signup
                                        {...props}
                                        loggedInStatus={
                                            this.state.loggedInStatus
                                        }
                                        handleLogin={this.handleLogin}
                                    />
                                )}
                            />
                            <Redirect to="/client/" />
                        </Switch>
                        <Footer />
                    </section>
                )}
            </BrowserRouter>
        );
    }
}

export default App;
