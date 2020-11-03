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
                    ClearStatesOnRemove={() => {}}
                />
                <NavigationBar
                    loggedInStatus={this.props.loggedInStatus}
                    name={this.props.name}
                    handleLogout={this.props.handleLogout}
                />
            </React.Fragment>
        );
    }
}

export default Header;
