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
import axios from "axios";

class BlogEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            url: "",
            difficulty: "",
            topic: "",
            question: "",
            solution: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`/blogs/${id}`).then((res) => {
            const blog = res.data;
            this.setState({ title: blog.title });
            this.setState({ url: blog.url });
            this.setState({ difficulty: blog.difficulty });
            this.setState({ topic: blog.topic });
            this.setState({ question: blog.question });
            this.setState({ solution: blog.solution });
        });
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value,
        });
    }
    async handleSubmit(event) {
        event.preventDefault();

        const id = this.props.match.params.id;

        const blog = {
            title: this.state.title,
            url: this.state.url,
            difficulty: this.state.difficulty,
            topic: this.state.topic,
            question: this.state.question,
            solution: this.state.solution,
        };
        let axiosConfig = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        await axios.put(`/blogs/${id}`, blog, axiosConfig).then((res) => {});

        this.props.history.push("/blogs");
    }
    render() {
        return (
            <section>
                <Container className="parentContainer-form">
                    <Row className="justify-content-center">
                        <Col md={10} xs={12}>
                            <Card className="shadow p-3 my-5 rounded bg-light-blue">
                                <CardBody className="text-center">
                                    <CardTitle>
                                        <h3 className="font-weight-bold">
                                            Edit Problem
                                        </h3>
                                    </CardTitle>
                                    <hr />
                                    <Form onSubmit={this.handleSubmit}>
                                        <FormGroup>
                                            <div className="input-group flex-nowrap">
                                                <div className="input-group-prepend">
                                                    <span
                                                        className="input-group-text"
                                                        id="addon-wrapping"
                                                    >
                                                        <i
                                                            className="fa fa-header fa-lg"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </span>
                                                </div>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Title"
                                                    aria-label="Title"
                                                    name="title"
                                                    value={this.state.title}
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
                                                        <i
                                                            className="fa fa-link fa-lg"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </span>
                                                </div>
                                                <Input
                                                    type="url"
                                                    className="form-control"
                                                    placeholder="URL"
                                                    aria-label="URL"
                                                    name="url"
                                                    value={this.state.url}
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    required
                                                />
                                            </div>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Col xs={6}>
                                                <div className="input-group flex-nowrap">
                                                    <div className="input-group-prepend">
                                                        <span
                                                            className="input-group-text"
                                                            id="addon-wrapping"
                                                        >
                                                            <i
                                                                className="fa fa-tachometer fa-lg"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </span>
                                                    </div>
                                                    <Input
                                                        type="select"
                                                        className="form-control"
                                                        placeholder="Difficulty"
                                                        aria-label="Difficulty"
                                                        name="difficulty"
                                                        value={
                                                            this.state
                                                                .difficulty
                                                        }
                                                        onChange={
                                                            this
                                                                .handleInputChange
                                                        }
                                                        required
                                                    >
                                                        <option value=""></option>
                                                        <option>Easy</option>
                                                        <option>Medium</option>
                                                        <option>Hard</option>
                                                    </Input>
                                                </div>
                                            </Col>
                                            <Col xs={6}>
                                                <div className="input-group flex-nowrap">
                                                    <div className="input-group-prepend">
                                                        <span
                                                            className="input-group-text"
                                                            id="addon-wrapping"
                                                        >
                                                            <i
                                                                className="fa fa-tasks fa-lg"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </span>
                                                    </div>
                                                    <Input
                                                        type="select"
                                                        className="form-control"
                                                        placeholder="Difficulty"
                                                        aria-label="Difficulty"
                                                        name="topic"
                                                        value={this.state.topic}
                                                        onChange={
                                                            this
                                                                .handleInputChange
                                                        }
                                                        required
                                                    >
                                                        <option value=""></option>
                                                        <option
                                                            value="combine-tags-by-or"
                                                            title="*combine tags by OR"
                                                        >
                                                            combine tags by OR
                                                        </option>
                                                        <option
                                                            value="2-sat"
                                                            title="2-satisfiability"
                                                        >
                                                            2-sat
                                                        </option>
                                                        <option
                                                            value="binary search"
                                                            title="Binary search"
                                                        >
                                                            binary search
                                                        </option>
                                                        <option
                                                            value="bitmasks"
                                                            title="Bitmasks"
                                                        >
                                                            bitmasks
                                                        </option>
                                                        <option
                                                            value="brute force"
                                                            title="Brute force"
                                                        >
                                                            brute force
                                                        </option>
                                                        <option
                                                            value="chinese remainder theorem"
                                                            title="Сhinese remainder theorem"
                                                        >
                                                            chinese remainder
                                                            theorem
                                                        </option>
                                                        <option
                                                            value="combinatorics"
                                                            title="Combinatorics"
                                                        >
                                                            combinatorics
                                                        </option>
                                                        <option
                                                            value="constructive algorithms"
                                                            title="Constructive algorithms"
                                                        >
                                                            constructive
                                                            algorithms
                                                        </option>
                                                        <option
                                                            value="data structures"
                                                            title="Heaps, binary search trees, segment trees, hash tables, etc"
                                                        >
                                                            data structures
                                                        </option>
                                                        <option
                                                            value="dfs and similar"
                                                            title="Dfs and similar"
                                                        >
                                                            dfs and similar
                                                        </option>
                                                        <option
                                                            value="divide and conquer"
                                                            title="Divide and Conquer"
                                                        >
                                                            divide and conquer
                                                        </option>
                                                        <option
                                                            value="dp"
                                                            title="Dynamic programming"
                                                        >
                                                            dp
                                                        </option>
                                                        <option
                                                            value="dsu"
                                                            title="Disjoint set union"
                                                        >
                                                            dsu
                                                        </option>
                                                        <option
                                                            value="expression parsing"
                                                            title="Parsing expression grammar"
                                                        >
                                                            expression parsing
                                                        </option>
                                                        <option
                                                            value="fft"
                                                            title="Fast Fourier transform"
                                                        >
                                                            fft
                                                        </option>
                                                        <option
                                                            value="flows"
                                                            title="Graph network flows"
                                                        >
                                                            flows
                                                        </option>
                                                        <option
                                                            value="games"
                                                            title="Games, Sprague–Grundy theorem"
                                                        >
                                                            games
                                                        </option>
                                                        <option
                                                            value="geometry"
                                                            title="Geometry, computational geometry"
                                                        >
                                                            geometry
                                                        </option>
                                                        <option
                                                            value="graph matchings"
                                                            title="Graph matchings, König's theorem, vertex cover of bipartite graph"
                                                        >
                                                            graph matchings
                                                        </option>
                                                        <option
                                                            value="graphs"
                                                            title="Graphs"
                                                        >
                                                            graphs
                                                        </option>
                                                        <option
                                                            value="greedy"
                                                            title="Greedy algorithms"
                                                        >
                                                            greedy
                                                        </option>
                                                        <option
                                                            value="hashing"
                                                            title="Hashing, hashtables"
                                                        >
                                                            hashing
                                                        </option>
                                                        <option
                                                            value="implementation"
                                                            title="Implementation problems, programming technics, simulation"
                                                        >
                                                            implementation
                                                        </option>
                                                        <option
                                                            value="interactive"
                                                            title="Interactive problem"
                                                        >
                                                            interactive
                                                        </option>
                                                        <option
                                                            value="math"
                                                            title="Mathematics including integration, differential equations, etc"
                                                        >
                                                            math
                                                        </option>
                                                        <option
                                                            value="matrices"
                                                            title="Matrix multiplication, determinant, Cramer's rule, systems of linear equations"
                                                        >
                                                            matrices
                                                        </option>
                                                        <option
                                                            value="meet-in-the-middle"
                                                            title="Meet-in-the-middle"
                                                        >
                                                            meet-in-the-middle
                                                        </option>
                                                        <option
                                                            value="number theory"
                                                            title="Number theory: Euler function, GCD, divisibility, etc"
                                                        >
                                                            number theory
                                                        </option>
                                                        <option
                                                            value="probabilities"
                                                            title="Probabilities, expected values, statistics, random variables, etc"
                                                        >
                                                            probabilities
                                                        </option>
                                                        <option
                                                            value="schedules"
                                                            title="Scheduling Algorithms"
                                                        >
                                                            schedules
                                                        </option>
                                                        <option
                                                            value="shortest paths"
                                                            title="Shortest paths on weighted and unweighted graphs"
                                                        >
                                                            shortest paths
                                                        </option>
                                                        <option
                                                            value="sortings"
                                                            title="Sortings, orderings"
                                                        >
                                                            sortings
                                                        </option>
                                                        <option
                                                            value="string suffix structures"
                                                            title="Suffix arrays, suffix trees, suffix automatas, etc"
                                                        >
                                                            string suffix
                                                            structures
                                                        </option>
                                                        <option
                                                            value="strings"
                                                            title="Prefix- and Z-functions, suffix structures, Knuth–Morris–Pratt algorithm, etc"
                                                        >
                                                            strings
                                                        </option>
                                                        <option
                                                            value="ternary search"
                                                            title="Ternary search"
                                                        >
                                                            ternary search
                                                        </option>
                                                        <option
                                                            value="trees"
                                                            title="Trees"
                                                        >
                                                            trees
                                                        </option>
                                                        <option
                                                            value="two pointers"
                                                            title="Two pointers"
                                                        >
                                                            two pointers
                                                        </option>
                                                    </Input>
                                                </div>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup>
                                            <div className="input-group flex-nowrap">
                                                <div className="input-group-prepend">
                                                    <span
                                                        className="input-group-text"
                                                        id="addon-wrapping"
                                                    >
                                                        <i
                                                            className="fa fa-question fa-lg"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </span>
                                                </div>
                                                <Input
                                                    type="textarea"
                                                    rows="6"
                                                    className="form-control"
                                                    placeholder="Problem Statement"
                                                    aria-label="Problem Statement"
                                                    name="question"
                                                    value={this.state.question}
                                                    onChange={
                                                        this.handleInputChange
                                                    }
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
                                                        <i
                                                            className="fa fa-lightbulb-o fa-lg"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </span>
                                                </div>
                                                <Input
                                                    type="textarea"
                                                    rows="6"
                                                    className="form-control"
                                                    placeholder="Solution"
                                                    aria-label="Solution"
                                                    name="solution"
                                                    value={this.state.solution}
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                />
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Button
                                                className="bg-dark btn-md btn-block"
                                                type="submit"
                                            >
                                                Edit Problem
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

export default BlogEdit;
