import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";


//import react-html-parser
import ReactHtmlParser from 'react-html-parser';

import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';


class PrivacyDescription extends Component {

    constructor(){
        super();
        this.state={
            des:"..."
        }
    }

    //call componentDidMount().This meathod work when this compoent is load everytime
    componentDidMount(){
      RestClient.GetRequest(AppUrl.Information).then(result=>{
        this.setState({des:result[0]['privacy']})
      });
    }


    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12} lg={12} md={12}>
                            { ReactHtmlParser(this.state.des) }
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default PrivacyDescription;