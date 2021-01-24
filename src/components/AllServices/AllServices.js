import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';

export default class AllServices extends Component {

  // This is a constructor
  constructor() {
      super();
      this.state ={
          myData:[]
      }
  }


    //call componentDidMount().This meathod work when this compoent is load everytime
    componentDidMount(){
      RestClient.GetRequest(AppUrl.service).then(result=>{
        this.setState({myData:result})
      });
    }


  render() {
    //access course data in myList which is an array
    const myList = this.state.myData;
    
        // create a dynamic card
        const myView = myList.map(myList=>{
          return <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img src={myList.serviceLogo}   height="100px" width="100px" alt="Alt.jpg"/>
                <h2 className="serviceName">Web Development</h2>
                <p className='serviceText'>Note that the development build is not optimized.Note that the development build is not optimized.</p>
              </div>
            </Col>
        })

    return (
      <Fragment>
        <Container className="text-center">
            <h1 className="Title">MY SERVICES</h1>
          <Row>
                     {/* Here call dynamic card.which is created avobe */}
                     {myView}
          </Row>
        </Container>
      </Fragment>
    )
  }
}
