import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// import Recharts Plugging
import {BarChart, Bar, XAxis,Tooltip,ResponsiveContainer,
} from 'recharts';
import ReactHtmlParser from 'react-html-parser';



import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';

export default class Analysis extends Component {
  constructor(){
    super();
    this.state={
      data:[],
      description:"..."
    }
  }

    //call componentDidMount().This meathod work when this compoent is load everytime
    componentDidMount(){
      RestClient.GetRequest(AppUrl.chartData).then(result=>{
        this.setState({data:result})
      });
      RestClient.GetRequest(AppUrl.tecDes).then(result=>{
        this.setState({description:result[0]['tecDes']})
      });
    }
  render() {
    //Chart fill color
    var barColor = "rgba(0,115,230,0.8)";
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="Title">TECNOLOGY USED</h1>
          <Row>
            <Col style={{width:'100%',height:'300px'}} lg={6} sm={12}>
              <ResponsiveContainer>
                <BarChart width={100} height={300} data={this.state.data}>
                <XAxis dataKey="Tecnology"/>
                 <Tooltip />
                <Bar dataKey="Projects" fill={barColor} />
                </BarChart>
              </ResponsiveContainer>
            </Col>
            <Col lg={6} sm={12}>
              <p className="text-justify tecnologyDescription">{ ReactHtmlParser(this.state.description) }</p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
