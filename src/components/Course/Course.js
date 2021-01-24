import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';

import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';

class Course extends Component {

    // This is a constructor
    constructor() {
        super();
        this.state ={
            myData:[]
        }
    }

  //call componentDidMount().This meathod work when this compoent is load everytime
  componentDidMount(){
    RestClient.GetRequest(AppUrl.courseHome).then(result=>{
      this.setState({myData:result})
    });
  }

    render() {
        
        //access course data in myList which is an array
        const myList = this.state.myData;

        // create a dynamic card
        const myView = myList.map(myList=>{
          return <Col lg={6} md={6} sm={12} className="p-2">
           <Row>
            <Col lg={6} md={6} sm={12}>
                <img className="courseImg" src={myList.smallImage} />
            </Col>
            <Col lg={6} md={6} sm={12}>
                <h5 className="text-justify courseTitle">{myList.longTitle}</h5>
                <p className="text-justify courseDes">{myList.longDes}</p>
                
                <Link  className="courseDetails float-left" to="/CourseDetails">Details</Link>
            </Col>
           </Row>
          </Col>
        })

        return (
            <Fragment>
                <Container className="text-center mt-5">
                   <h1 className="Title">OUR COURSES</h1>
                    <Row>
                     {/* Here call dynamic card.which is created avobe */}
                     {myView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Course;