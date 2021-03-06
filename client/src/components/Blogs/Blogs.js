import React, { Component } from "react";
import {
    Container,
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Button,
    Input,
    Form,
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import axios from "axios";

class Blogs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: [],
            search: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value,
        });
    }
    async componentDidMount() {
        setTimeout(async () => {
            var userID = this.props.userID;
            await axios.get(`/blogs/${userID}`).then((res) => {
                const blogs = res.data;
                this.setState({ blogs });
            });
        }, 500);
    }

    BlogListOnSearch() {
        setTimeout(async () => {
            var userID = this.props.userID;
            var search = this.state.search;
            await axios.get(`/blogs/${userID}/${search}`).then((res) => {
                const blogs = res.data;
                this.setState({ blogs });
            });
        }, 500);
    }
    deleteContact(id) {
        const updatedblogs = this.state.blogs.filter((blog) => blog._id !== id);
        this.setState({ blogs: updatedblogs });
        var userID = this.state.userID;
        axios.delete(`/blogs/${userID}/${id}`).then(() => {});
    }
    render() {
        const ListBlogs = this.state.blogs.map(({ _id, title }) => {
            return (
                <CSSTransition key={_id} classNames="fade" timeout={200}>
                    <ListGroupItem className="bg-light-blue shadow mb-4 rounded">
                        <Row className="align-items-center">
                            <Col md={9} xs={8}>
                                <h6 className="font-weight-bold">{title}</h6>
                            </Col>
                            <Col xs={1} className="text-center">
                                <Link to={`/client/blogs/view/${_id}`}>
                                    <i
                                        className="fa fa-eye fa-lg text-info"
                                        aria-hidden="true"
                                    ></i>
                                </Link>
                            </Col>
                            <Col xs={1} className="text-center">
                                <Link to={`/client/blogs/edit/${_id}`}>
                                    <i
                                        className="fa fa-pencil-square-o fa-lg text-success"
                                        aria-hidden="true"
                                    ></i>
                                </Link>
                            </Col>
                            <Col xs={1} className="text-center">
                                <button
                                    className="btn remove-btn"
                                    onClick={this.deleteContact.bind(this, _id)}
                                >
                                    <i
                                        className="fa fa-times-circle-o fa-lg text-danger"
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
                    List of Problem Blogs
                </h3>
                <hr />
                <Container>
                    <Form onSubmit={this.handleSubmit}>
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
                                <Link
                                    className="btn btn-outline-success"
                                    to="/client/blogs/add"
                                >
                                    Add Problem
                                </Link>
                            </div>
                        </div>
                    </Form>
                    <ListGroup>
                        <TransitionGroup>{ListBlogs}</TransitionGroup>
                    </ListGroup>
                </Container>
                <br /> <br />
            </section>
        );
    }
}
export default Blogs;
