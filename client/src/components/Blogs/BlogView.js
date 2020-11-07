import React, { Component } from "react";
import {
    Card,
    CardBody,
    CardSubtitle,
    CardTitle,
    Col,
    Container,
    Row,
} from "reactstrap";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

import * as ace from "ace-builds";
import AceEditor from "react-ace";

// cdnjs didn't have a "no-conflict" version, so we'll use jsdelivr
const CDN = "https://cdn.jsdelivr.net/npm/ace-builds@1.3.3/src-min-noconflict";

// Now we tell ace to use the CDN locations to look for files
ace.config.set("basePath", CDN);

class BlogView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blog: {},
        };
    }
    async componentDidMount() {
        const id = this.props.match.params.id;
        await axios.get(`/blogs/${id}`).then((res) => {
            const blog = res.data;
            this.setState({ blog: blog });
        });
    }

    render() {
        return (
            <section>
                <Container>
                    <Card className="my-5 bg-light-blue shadow p-3 mb-5 rounded">
                        <CardBody>
                            <CardTitle className="my-3">
                                <h3 className="font-weight-bold text-center">
                                    {this.state.blog.title}
                                </h3>
                            </CardTitle>
                            <CardSubtitle className="row">
                                <Col
                                    xs={{ size: "auto", offset: 6 }}
                                    className="ml-auto"
                                >
                                    <a
                                        href={`${this.state.blog.url}`}
                                        className="text-dark"
                                        target="__blank"
                                    >
                                        Go to the problem
                                    </a>
                                </Col>
                            </CardSubtitle>
                            <Row>
                                <Col xs="auto" md={5}>
                                    <h6 className="font-weight-bold text-center text-success">
                                        Difficulty:&nbsp;
                                        {this.state.blog.difficulty}
                                    </h6>
                                </Col>
                                <Col></Col>
                                <Col xs="auto" md={5}>
                                    <h6 className="font-weight-bold text-center text-primary">
                                        Topic:&nbsp;
                                        {this.state.blog.topic}
                                    </h6>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <h6 className="font-weight-bold">
                                        Problem Statement:
                                    </h6>
                                </Col>
                            </Row>
                            <Row className="bg-light p-3 rounded">
                                <Col>
                                    <p>{this.state.blog.question}</p>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <h6 className="font-weight-bold">
                                        Solution:
                                    </h6>
                                </Col>
                            </Row>
                            <Row className="bg-light p-3 rounded">
                                <Col>
                                    <p>{this.state.blog.solution}</p>
                                </Col>
                            </Row>
                            <Row className="rounded my-3">
                                <Col xs="auto" className="ml-auto">
                                    <span className="border border-danger p-1">
                                        {this.state.blog.language}
                                    </span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <AceEditor
                                        mode={this.state.blog.selected_language}
                                        theme="monokai"
                                        placeholder="// Code"
                                        value={this.state.blog.code}
                                        name="AceEditor"
                                        fontSize={18}
                                        showPrintMargin={false}
                                        setOptions={{
                                            useWorker: false,
                                        }}
                                        editorProps={{
                                            $blockScrolling: true,
                                        }}
                                        readOnly={true}
                                    />
                                </Col>
                            </Row>
                        </CardBody>
                        <Row>
                            <Col xs="auto" className="ml-auto">
                                <Link to="/client/blogs" className="text-dark">
                                    {"<"} Back to blog page
                                </Link>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </section>
        );
    }
}

export default withRouter(BlogView);
