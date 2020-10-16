import React, { Component } from "react";
import {
    Card,
    CardBody,
    CardTitle,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Row,
    Button,
} from "reactstrap";
import LoginIcon from "./../../public/images/user.png";

class Login extends Component {
    render() {
        return (
            <section className="bg-light-blue">
                <Container className="parentContainer-form">
                    <Row className="justify-content-center">
                        <Col md={6} xs={10}>
                            <Card>
                                <CardBody className="text-center">
                                    <img
                                        src={LoginIcon}
                                        alt="Login icon Image"
                                        width="150px"
                                        className="rounded-circle border border-dark"
                                    />
                                    <CardTitle className="font-weight-bold">
                                        Login Form
                                    </CardTitle>
                                    <Form>
                                        <FormGroup>
                                            <div className="input-group flex-nowrap">
                                                <div className="input-group-prepend">
                                                    <span
                                                        className="input-group-text"
                                                        id="addon-wrapping"
                                                    >
                                                        <i className="fa fa-envelope"></i>
                                                    </span>
                                                </div>
                                                <Input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    aria-label="Email"
                                                />
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <div className="input-group flex-nowrap">
                                                <div className="input-group-prepend">
                                                    <span
                                                        className="input-group-text"
                                                        id="addon-wrapping"
                                                    >
                                                        <i className="fa fa-lock"></i>
                                                    </span>
                                                </div>
                                                <Input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    aria-label="Password"
                                                />
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Button className="bg-primary btn-md btn-block">
                                                Login
                                            </Button>
                                        </FormGroup>
                                        <FormGroup>
                                            <a href="#" className="text-dark">
                                                Forgot your password?
                                            </a>
                                        </FormGroup>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Login;
