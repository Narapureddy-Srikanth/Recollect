import React, { Component } from "react";
import Main from "./Main.js";
import NavigationBar from "./NavigationBar.js";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Main
                    text="scroll down for more information"
                    bgcolor="bg-info"
                    textcolor="text-light"
                />
                <NavigationBar />
            </React.Fragment>
        );
    }
}

export default Header;
