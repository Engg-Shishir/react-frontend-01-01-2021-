import React, { Component, Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="text-center footerSection">
          <Row>
          <Col lg={3} md={6} sm={12} className="p-5 text-justify">
            <h4 className="footerTitle">Follow Me</h4>
            <a href="" className="sociaLink"><i className="fab fa-facebook"></i>&nbsp;Facebook</a><br/>
            <a href="" className="sociaLink"><i className="fab fa-github"></i>&nbsp;Github</a>
          </Col>
          <Col lg={3} md={6} sm={12} className="p-5 text-justify">
            <h4 className="footerTitle">Address</h4>
            <p className="footerDiscription"> <i className="fas fa-address-card"></i> #79/6 Padma Residential Aria, 3rd Floor Front Side, Rajshahi</p>
            <span  className="footerDiscription"> <i className="fas fa-envelope"></i> shishir@gmail.com</span>
            <p  className="footerDiscription"> <i className="fas fa-phone"></i> 01703353056</p>
          </Col>
          <Col lg={3} md={6} sm={12} className="p-5 text-justify">
            <h4 className="footerTitle">Information</h4>
            <Link className="footerLink" to="/about">About Me</Link><br/>
            <a href="#" className="footerLink">My Resume</a><br/>
            <Link className="footerLink" to="/contact">Contact Me</Link><br/>
          </Col>
          <Col lg={3} md={6} sm={12} className="p-5 text-justify">
            <h4 className="footerTitle">Legal</h4>
            <Link className="footerLink" to="/refund">Refund Policy</Link><br/>
            <Link className="footerLink" to="/terms">Terms And Condition</Link><br/>
            <Link className="footerLink" to="/privacy">Privacy Policy</Link><br/>
          </Col>
          </Row>
        </Container>
        <Container fluid={true} className="text-center copyrightSection">
          <a href="" className="copyrightText">&copy; All right resarved by Shishir - 2021</a>
        </Container>
      </Fragment>
    )
  }
}
