import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';

import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';

class RecentProject extends Component {
    // This is a constructor
    constructor() {
        super();
        this.state ={
            myData:[]
        }
    }


  //call componentDidMount().This meathod work when this compoent is load everytime
  componentDidMount(){
    RestClient.GetRequest(AppUrl.projectHome).then(result=>{
      this.setState({myData:result})
    });
  }

    render() {
    //access course data in myList which is an array
    const myList = this.state.myData;
    
    // create a dynamic card
    const myView = myList.map(myList=>{
      return <Col sm={12} md={6} lg={4}>
        <Card style={{ width: '18rem' }}>
            <Card.Img height="250px" width="250px" variant="top" src={myList.imageOne} />
            <Card.Body>
                <Card.Title>{myList.projectName}</Card.Title>
                <Card.Text>
                  {myList.projectDes}
                </Card.Text>
                
                <Link to={"/projectdetails/"+myList.id+"/"+myList.projectName}><Button variant="primary">Details</Button></Link>
            </Card.Body>
        </Card>
      </Col>
    })
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="Title">RECENT PROJECTS</h1>
                    <Row>
                        {myView}
                    </Row>
                </Container>
                
            </Fragment>
        );
    }
}

export default RecentProject;