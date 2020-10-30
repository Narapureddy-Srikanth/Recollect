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
                        <h2>
                            Grow your business <strong>Recollect</strong>
                        </h2>
                        <h4>
                            We are the team of talented developer making
                            website, write more dummy text.
                        </h4>
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
