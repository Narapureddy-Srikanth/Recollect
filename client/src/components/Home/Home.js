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
                            Lot of Websites in town. Why you should choose us?
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
                heading="Why Recollect?"
                body="Recollect is one of the best online data storage websites that focuses on privacy, simplicity, availability and the easiness of writing. The name itself says the reason behind innovating it. It is extremely easy to use and user friendly. With a lot more features, it provides you an easy to use platform where you can write and maintain your Codes and keep a track of your placement preparation."
            />

            <Contentbody
                bgcolor="bg-light-blue"
                textcolor="text-dark"
                order="2"
                image={Hacker}
                heading="Your Security is our Top Priority!"
                body="There are so many ways that can make you feel concerned, if things get misplaced or lost. Obviously you have put too much effort especially at the peak time of Placements, don’t afford that something can damage or destroy this precious Codes. Recollect is specifically designed by considering these factors. Our services are secure and encrypted. So you can rest assured knowing that your Codes are safe and no one can stumble onto them."
            />
            <Contentbody
                bgcolor=""
                textcolor=""
                order="1"
                image={Blog}
                heading="Study with Comfort..."
                body="We know that It is simply impossible to carry a Laptop with you all the time, using Recollect you can access your Codes anytime and from anywhere you want. All you need is a computer system and an internet connection. Recollect also provides 450+ standard coding interview problems topics and makes you job ready."
            />
        </React.Fragment>
    );
}

export default Home;
