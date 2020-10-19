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
    FormFeedback,
} from "reactstrap";
import LoginIcon from "./../../public/images/user.png";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.formValidation = this.formValidation.bind(this);
    }
    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value,
        });
    }
    handleSubmit(event) {
        // window.alert(JSON.stringify(this.state));
        event.preventDefault();
    }
    // formValidation(email, password) {
    //     const error = {
    //         email: "",
    //         password: "",
    //     };
    //     if (email.length === 0) {
    //         error.email = "Email is required field";
    //     }
    //     if (password.length === 0) {
    //         error.password = "Password is required field";
    //     }
    //     return error;
    // }
    render() {
        // const error = this.formValidation(
        //     this.state.email,
        //     this.state.password
        // );
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
                                        width="120px"
                                        className="rounded-circle"
                                    />
                                    <CardTitle>
                                        <h3 className="font-weight-bold">
                                            Login Form
                                        </h3>
                                    </CardTitle>
                                    <Form onSubmit={this.handleSubmit}>
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
                                                    name="email"
                                                    value={this.state.email}
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    required
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
                                                    name="password"
                                                    value={this.state.password}
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    required
                                                />
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Button
                                                className="bg-dark btn-md btn-block"
                                                type="submit"
                                            >
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
