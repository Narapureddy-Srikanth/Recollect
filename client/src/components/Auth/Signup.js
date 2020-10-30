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
import SignupIcon from "./../../../public/images/add-user.png";

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            confirm_password: "",
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
    render() {
        return (
            <section className="bg-light-blue">
                <Container className="parentContainer-form">
                    <Row className="justify-content-center">
                        <Col md={6} xs={10}>
                            <Card className="shadow p-3 my-5 rounded">
                                <CardBody className="text-center">
                                    <img
                                        src={SignupIcon}
                                        alt="Login icon Image"
                                        width="120px"
                                        className="rounded-circle"
                                    />
                                    <CardTitle>
                                        <h3 className="font-weight-bold">
                                            Signup Form
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
                                                        <i className="fa fa-user"></i>
                                                    </span>
                                                </div>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Name"
                                                    aria-label="Email"
                                                    name="name"
                                                    value={this.state.name}
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
                                                    placeholder="Confirm password"
                                                    aria-label="Confirm password"
                                                    name="confirm_password"
                                                    value={
                                                        this.state
                                                            .confirm_password
                                                    }
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
                                                Signup
                                            </Button>
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

export default Signup;
