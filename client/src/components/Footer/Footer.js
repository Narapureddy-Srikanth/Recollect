import React from "react";
import { Container, Row, Col } from "reactstrap";

function Footer() {
    return (
        <footer className="bg-dark">
            <Container>
                <Row className="pt-3">
                    <Col className="text-center">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <a
                                    className="btn btn-outline-light btn-social text-center rounded-circle"
                                    href="#"
                                >
                                    <i className="fa fa-fw fa-facebook"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    className="btn btn-outline-light btn-social text-center rounded-circle"
                                    href="#"
                                >
                                    <i className="fa fa-fw fa-google-plus"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    className="btn btn-outline-light btn-social text-center rounded-circle"
                                    href="#"
                                >
                                    <i className="fa fa-fw fa-twitter"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    className="btn btn-outline-light btn-social text-center rounded-circle"
                                    href="#"
                                >
                                    <i className="fa fa-fw fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <hr className="bg-light" />
                <Row>
                    <Col className="text-center">
                        <p className="text-light">
                            &#169; Copyrights <strong>Recollect</strong>. All
                            Rights Reseved
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
