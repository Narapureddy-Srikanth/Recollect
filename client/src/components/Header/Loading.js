import React, { Component } from "react";

class Loading extends Component {
    render() {
        return (
            <React.Fragment>
                <section>
                    <div className="outer">
                        <div className="middle">
                            <div className="inner">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Loading;
