import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import Logo from "./../../public/images/logo-white.png";

class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">
                    <img src={Logo} alt="Logo" width="35px" className="p-1" />
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
                            <NavLink exact to="/" className="nav-link">
                                <i
                                    className="fa fa-home p-1"
                                    aria-hidden="true"
                                ></i>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact to="/about" className="nav-link">
                                <i
                                    className="fa fa-user p-1"
                                    aria-hidden="true"
                                ></i>
                                About us
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar className="ml-auto">
                        <NavItem>
                            <NavLink
                                exact
                                to="/login"
                                className="nav-link btn btn-outline-info mr-2"
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
                                to="/signup"
                                className="nav-link btn btn-outline-info mr-2"
                            >
                                <i
                                    className="fa fa-user-plus p-1"
                                    aria-hidden="true"
                                ></i>
                                Signup
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        );
    }
}

export default NavigationBar;
