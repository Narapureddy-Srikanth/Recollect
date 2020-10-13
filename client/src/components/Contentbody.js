import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

class Contentbody extends Component {
    render() {
        return (
            <section className={this.props.bgcolor}>
                <Container>
                    <Row className="align-items-center p-5">
                        <Col
                            md={6}
                            xs={{ order: this.props.order }}
                            className="text-center"
                        >
                            <img
                                src={this.props.image}
                                className="img-fluid"
                                alt="home page image"
                                width="250px"
                            />
                        </Col>
                        <Col
                            md={6}
                            xs={{ order: 3 - this.props.order }}
                            className={`text-center ${this.props.textcolor}`}
                        >
                            <h1 className="font-weight-bold">
                                {this.props.heading}
                            </h1>
                            <h5>{this.props.body}</h5>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Contentbody;
