import React, { Component, Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//import react-html-parser
import ReactHtmlParser from 'react-html-parser';

import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';


export default class Footer extends Component {

  constructor(){
    super();
    this.state={
      address:"",
      email:"",
      phone:"",
      facebook:"",
      youtube:"",
      footerCreadit:""
    }
  }

  //call componentDidMount().This meathod work when this compoent is load everytime
  componentDidMount(){
    RestClient.GetRequest(AppUrl.footer).then(result=>{
        this.setState({
        address:result[0]['address'],
        email:result[0]['email'],
        phone:result[0]['phone'],
        facebook:result[0]['facebook'],
        youtube:result[0]['youtube'],
        footerCreadit:result[0]['footerCreadit'],
      })
    });
  }


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
            <p className="footerDiscription"> <i className="fas fa-address-card"></i> {this.state.address}</p>
            <span  className="footerDiscription"> <i className="fas fa-envelope"></i> {this.state.email}</span>
            <p  className="footerDiscription"> <i className="fas fa-phone"></i>{this.state.phone}</p>
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
          <a href="" className="copyrightText">{this.state.footerCreadit}</a>
        </Container>
      </Fragment>
    )
  }
}
