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
import Main from "./../Header/Main";
import LoginIcon from "./../../../public/images/user.png";
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: "",
            bgColor: "bg-success",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.ClearStatesOnRemove = this.ClearStatesOnRemove.bind(this);
    }
    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value,
        });
    }

    ClearStatesOnRemove() {
        this.setState({
            error: "",
            bgColor: "bg-success",
        });
    }

    async handleSubmit(event) {
        event.preventDefault();

        await axios
            .post(
                "/user/login",
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
                {
                    auth: {
                        username: this.state.email,
                        password: this.state.password,
                    },
                }
            )
            .then((res) => {
                this.setState({
                    error: "Login Successful",
                    bgColor: "bg-success",
                });
                this.props.handleLogin(res.data.name, res.data.userID);
                this.props.history.push("/");
            })
            .catch((err) => {
                this.setState({
                    error: err.response.data,
                    bgColor: "bg-danger",
                });
            });
    }
    render() {
        const iferror = this.state.error.length > 0;
        return (
            <section className="bg-light-blue">
                {iferror ? (
                    <Main
                        text={this.state.error}
                        bgcolor={this.state.bgColor}
                        textcolor="text-light"
                        ClearStatesOnRemove={this.ClearStatesOnRemove}
                    />
                ) : (
                    <React.Fragment />
                )}
                <Container className="parentContainer-form">
                    <Row className="justify-content-center">
                        <Col md={6} xs={10}>
                            <Card className="shadow p-3 my-5 rounded">
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
