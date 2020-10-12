import React, { Component } from "react";
import Main from "./Main.js";
import Navbar from "./Navbar.js";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Main
                    text="scroll down for more information"
                    bgcolor="bg-info"
                    textcolor="text-light"
                />
                <Navbar />
            </React.Fragment>
        );
    }
}

export default Header;
