import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardOne from '../../asset/images/card/web.svg'
import CardTwo from '../../asset/images/card/mobile.svg'
import CardThree from '../../asset/images/card/graphics.svg'

export default class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
            <h1 className="Title">MY SERVICES</h1>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img src={CardOne}  height="100px" width="100px" alt="Alt.jpg"/>
                <h2 className="serviceName">Web Development</h2>
                <p className='serviceText'>Note that the development build is not optimized.Note that the development build is not optimized.</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img src={CardTwo}  height="100px" width="100px" alt="Alt.jpg"/>
                <h2 className="serviceName">Mobile Development</h2>
                <p className='serviceText'>Note that the development build is not optimized.Note that the development build is not optimized.</p>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img src={CardThree}  height="100px" width="100px" alt="Alt.jpg"/>
                <h2 className="serviceName">Windows Development</h2>
                <p className='serviceText'>Note that the development build is not optimized.Note that the development build is not optimized.</p>
                </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
