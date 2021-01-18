import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';
import CardTwo from '../../asset/images/card/three.svg';

class RecentProject extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="Title">RECENT PROJECTS</h1>
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img height="200px" width="200px" variant="top" src={CardTwo} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                   
                                    <Link to="/projectdetails"><Button variant="primary">Details</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4}>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img height="200px" width="200px" variant="top" src={CardTwo} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                   
                                    <Link to="/projectdetails"><Button variant="primary">Details</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4}>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img height="200px" width="200px" variant="top" src={CardTwo} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                   
                                    <Link to="/projectdetails"><Button variant="primary">Details</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
                
            </Fragment>
        );
    }
}

export default RecentProject;