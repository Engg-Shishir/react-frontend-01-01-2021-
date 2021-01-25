import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";


//import react-html-parser
import ReactHtmlParser from 'react-html-parser';

import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';

class ProjectDetails extends Component {
   
    constructor(props){
       super();
       this.state = {
           ProjectId:props.id,
           projectName:"",
           shortDes:"",
           projectFeatures:"",
           livePreview:"",
           imgTwo:""
       }
    }

    // For Page Load in at the top
    componentDidMount(){
        RestClient.GetRequest(AppUrl.projectDetails+this.state.ProjectId).then(result=>{
          this.setState({
              projectName:result[0]['projectName'],
              imgTwo:result[0]['imageTwo'],
              shortDes:result[0]['projectDes'],
              projectFeatures:result[0]['projectFeature'],
              livePreview:result[0]['livePreview'],
            })
        }).catch(error=>{

        });
    }


    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                        <Row>
                            <Col lg={6} md={6} sm={12}>

                            <img height="300px" width="300px" src={this.state.imgTwo}/>

                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h2 className="serviceName">{this.state.projectName}</h2>
                                <p className="serviceDescription">{this.state.shortDes}</p>
                                
                                { ReactHtmlParser(this.state.projectFeatures) }
                                <Button variant="primary">More Info</Button>
                            </Col>


                        </Row>
                </Container>


                
            </Fragment>
        );
    }
}

export default ProjectDetails;