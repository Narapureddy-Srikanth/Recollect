import React from "react";
import { Row, Col, Container } from "reactstrap";
import Jumbotron from "./Jumbotron.js";
import Contentbody from "./Contentbody.js";
import Blog from "./../../../public/images/article.png";
import Study from "./../../../public/images/teacher.png";
import Hacker from "./../../../public/images/hacker.png";

function Home() {
    return (
        <React.Fragment>
            <Jumbotron />
            <Container>
                <Row>
                    <Col xs={12} className="text-center">
                        <h4>
                            Lot of IT Companies in town. Why you should choose
                            us?
                        </h4>
                    </Col>
                </Row>
                <hr />
            </Container>
            <Contentbody
                bgcolor=""
                textcolor=""
                order="1"
                image={Study}
                heading="Connect with whom?"
                body="An innovative purpose of this website which allows you to know about other students of the college without meeting them in person. The intention of this page is to enhance the connectivity among students with the same area of interest, state, department, and year."
            />
            <Contentbody
                bgcolor="bg-light-blue"
                textcolor="text-dark"
                order="2"
                image={Blog}
                heading="Connect with whom?"
                body="An innovative purpose of this website which allows you to know about other students of the college without meeting them in person. The intention of this page is to enhance the connectivity among students with the same area of interest, state, department, and year."
            />
            <Contentbody
                bgcolor=""
                order="1"
                image={Hacker}
                heading="Connect with whom?"
                body="An innovative purpose of this website which allows you to know about other students of the college without meeting them in person. The intention of this page is to enhance the connectivity among students with the same area of interest, state, department, and year."
            />
        </React.Fragment>
    );
}

export default Home;
