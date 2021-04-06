import React, { Component } from "react";
import {
    Container,
    Button,
    Input,
    ListGroup,
    ListGroupItem,
    Row,
    Col,
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import axios from "axios";

class ProblemsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lists: [],
            search: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    async componentDidMount() {
        await axios.get(`/problemslist/`).then((res) => {
            const lists = res.data;
            this.setState({ lists });
        });
    }
    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value,
        });
    }
    async BlogListOnSearch() {
        var search = this.state.search;
        await axios.get(`/problemslist/${search}`).then((res) => {
            const lists = res.data;
            this.setState({ lists });
        });
    }
    async handleAddtoBlog(name, topic) {
        const blog = {
            title: name,
            url: "#",
            difficulty: "",
            topic: topic,
            question: "",
            solution: "",
            language: "Javascript",
            selected_language: "javascript",
            code: "",
            userID: this.props.userID,
        };
        let axiosConfig = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        await axios.post("/blogs/", blog, axiosConfig).then((res) => {});

        this.props.history.push("/client/blogs");
    }
    render() {
        const ListProblems = this.state.lists.map(({ _id, name, topic }) => {
            if (name.length === 0) return;
            return (
                <CSSTransition key={_id} timeout={200}>
                    <ListGroupItem className="bg-light-blue shadow mb-4 rounded">
                        <Row className="align-items-center">
                            <Col md={11} xs={10}>
                                <h6 className="font-weight-bold">
                                    {name} {" ( "}
                                    <span className="text-success">
                                        {" "}
                                        {topic}{" "}
                                    </span>
                                    {" ) "}
                                </h6>
                            </Col>
                            <Col xs={1} className="text-center">
                                <button
                                    className="btn remove-btn"
                                    onClick={this.handleAddtoBlog.bind(
                                        this,
                                        name,
                                        topic
                                    )}
                                >
                                    <i
                                        className="fa fa-cart-plus fa-lg text-primary"
                                        aria-hidden="true"
                                    ></i>
                                </button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </CSSTransition>
            );
        });
        return (
            <section>
                <h3 className="font-weight-bold text-center my-3">
                    List of standard problems
                </h3>
                <hr />
                <Container>
                    <div className="input-group mb-5">
                        <Input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            aria-label="Search Title"
                            name="search"
                            value={this.state.search}
                            onChange={this.handleInputChange}
                        />
                        <div className="input-group-append">
                            <Button
                                color="info"
                                outline
                                onClick={this.BlogListOnSearch.bind(this)}
                            >
                                Search
                            </Button>
                        </div>
                    </div>
                    <ListGroup>
                        <TransitionGroup>{ListProblems}</TransitionGroup>
                    </ListGroup>
                </Container>
                <br /> <br />
            </section>
        );
    }
}

export default ProblemsList;
