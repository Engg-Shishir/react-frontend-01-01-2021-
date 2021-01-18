
import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
export default class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="summary summarySection p-0">
          <div className="summaryBannnerOverlay">
            <Container className="text-center">
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row className="countSecion">
                    <Col className="text-center">
                      <h1 className="countNumber">
                        <CountUp start={0} end={100}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                      </h1>
                      <h4 className="countTitle">Total Projects</h4>
                      <hr className="bg-white w-25"/>
                    </Col>
                    <Col>
                      <h1 className="countNumber">
                        <CountUp start={0} end={100}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                      </h1>
                      <h4 className="countTitle">Total Clients</h4>
                      <hr className="bg-white w-25"/>
                    </Col>
                  </Row>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Card className="summaryCard">
                    <Card.Body>
                      <Card.Title className="summaryCardTitle text-justify">How i work</Card.Title>
                      <Card.Text>
                        <p className="summaryCardSubTitle text-left"><i className="fas fa-check-circle text-success"></i>&nbsp;&nbsp;Requirement Gathering</p>
                        <p className="summaryCardSubTitle text-left"><i className="fas fa-check-circle text-success"></i>&nbsp;&nbsp;System Analysis</p>
                        <p className="summaryCardSubTitle text-left"><i className="fas fa-check-circle text-success"></i>&nbsp;&nbsp;Coading Testing</p>
                        <p className="summaryCardSubTitle text-left"><i className="fas fa-check-circle text-success"></i>&nbsp;&nbsp;Implemintation</p>
                        
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    )
  }
}

