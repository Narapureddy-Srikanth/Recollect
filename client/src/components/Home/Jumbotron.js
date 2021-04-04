import React from "react";
import { Col, Container, Row } from "reactstrap";
import HomeImage from "./../../../public/images/home-image.jpg";

function Jumbotron() {
    return (
        <section className="jumbotron bg-light-blue">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col
                        md={{ size: 6, order: 1 }}
                        xs={{ size: 10, order: 2 }}
                        className="text-center pt-3 pb-5"
                    >
                        <h3>
                            Eat, Sleep, Code, Repeat with{" "}
                            <strong>Recollect</strong>
                        </h3>
                        <blockquote>
                            <h4>
                                It's never too late in fiction or in life to
                                revise.
                            </h4>
                            <footer className="blockquote-footer">
                                Nancy Thayar
                            </footer>
                        </blockquote>
                    </Col>
                    <Col md={{ size: 6, order: 2 }} xs={{ size: 10, order: 1 }}>
                        <img
                            src={HomeImage}
                            className="img-fluid img-animate"
                            alt="home page image"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Jumbotron;
