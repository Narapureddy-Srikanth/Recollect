import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import Logo from "./../../../public/images/logo-white.png";
import axios from "axios";

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    handleLogoutClick(event) {
        this.props.handleLogout();
        axios.get("/user/logout").then((res) => {});
    }
    render() {
        return (
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">
                    <img
                        src={Logo}
                        alt="Logo Image"
                        width="35px"
                        className="p-1"
                    />
                    Recollect
                </NavbarBrand>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <Nav navbar className="mr-auto">
                        <NavItem>
                            <NavLink exact to="/client/" className="nav-link">
                                <i
                                    className="fa fa-home p-1"
                                    aria-hidden="true"
                                ></i>
                                Home
                            </NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink
                                exact
                                to="/client/aboutus"
                                className="nav-link"
                            >
                                <i
                                    className="fa fa-user p-1"
                                    aria-hidden="true"
                                ></i>
                                About us
                            </NavLink>
                        </NavItem> */}
                        <NavItem>
                            <NavLink
                                exact
                                to="/client/problemslist"
                                className="nav-link"
                            >
                                <i
                                    className="fa fa-book p-1"
                                    aria-hidden="true"
                                ></i>
                                Problems List
                            </NavLink>
                        </NavItem>
                        {this.props.loggedInStatus === "Logged_In" ? (
                            <NavItem>
                                <NavLink
                                    exact
                                    to="/client/blogs"
                                    className="nav-link"
                                >
                                    <i
                                        className="fa fa-plus-circle p-1"
                                        aria-hidden="true"
                                    ></i>
                                    Add Blog
                                </NavLink>
                            </NavItem>
                        ) : (
                            <React.Fragment />
                        )}
                    </Nav>
                    {this.props.loggedInStatus === "Logged_In" ? (
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <h5 className="text-light mt-2">
                                    Hello, {this.props.name}
                                </h5>
                            </NavItem>
                            <NavItem>
                                <Button
                                    onClick={this.handleLogoutClick}
                                    className="ml-2 text-light"
                                    color="info"
                                    outline
                                >
                                    <i
                                        className="fa fa-sign-out"
                                        aria-hidden="true"
                                    ></i>
                                    Logout
                                </Button>
                            </NavItem>
                        </Nav>
                    ) : (
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink
                                    exact
                                    to="/client/login"
                                    className="nav-link btn btn-outline-info ml-2 text-light"
                                >
                                    <i
                                        className="fa fa-sign-in p-1"
                                        aria-hidden="true"
                                    ></i>
                                    Login
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    exact
                                    to="/client/signup"
                                    className="nav-link btn btn-outline-info ml-2 text-light"
                                >
                                    <i
                                        className="fa fa-user-plus p-1"
                                        aria-hidden="true"
                                    ></i>
                                    Signup
                                </NavLink>
                            </NavItem>
                        </Nav>
                    )}
                </div>
            </Navbar>
        );
    }
}

export default NavigationBar;
