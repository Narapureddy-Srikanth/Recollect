import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgcolor: this.props.bgcolor || "bg-primary",
            textcolor: this.props.textcolor || "text-light",
            on: true,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        this.setState({
            on: false,
        });
    }
    render() {
        if (this.state.on)
            return (
                <section className={this.state.bgcolor || ""}>
                    <Container>
                        <Row className="justify-content-md-center align-items-center">
                            <Col xs={2} className="text-center">
                                <i
                                    className="fa fa-asterisk"
                                    aria-hidden="true"
                                ></i>
                            </Col>
                            <Col
                                xs={8}
                                className={`text-center ${this.state.textcolor}`}
                            >
                                {this.props.text || ""}
                            </Col>
                            <Col xs={2} className="text-center">
                                <button
                                    className="btn"
                                    onClick={this.handleClick}
                                >
                                    <i
                                        className="fa fa-times"
                                        aria-hidden="true"
                                    ></i>
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </section>
            );
        else return <React.Fragment></React.Fragment>;
    }
}

export default Main;
