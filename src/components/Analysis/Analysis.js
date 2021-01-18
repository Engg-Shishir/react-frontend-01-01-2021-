import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// import Recharts Plugging
import {BarChart, Bar, XAxis,Tooltip,ResponsiveContainer,
} from 'recharts';

export default class Analysis extends Component {
  constructor(){
    super();
    this.state={
      data:[
        //Data set according to chart X & Y axis
        { Tecnology:'Java',Projects:100 },
        { Tecnology:'Kotlin',Projects:50 },
        { Tecnology:'C++',Projects:70 },
        { Tecnology:'Bootstrap',Projects:90 },
        { Tecnology:'JS',Projects:70 },
        { Tecnology:'Jquery',Projects:70 },
        { Tecnology:'React',Projects:75 },
        { Tecnology:'Php',Projects:70 },
      ]
    }
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
              <p className="text-justify tecnologyDescription">A callback fired when a descendant of a child  is selected. Should be used to execute complex closing or other miscellaneous actions desired after selecting a descendant of . Does nothing if no or descendants exist. The callback is called with an eventKey, which is a prop from the selected  descendant, and an eventA callback fired when a descendant of a child  is selected. Should be used to execute complex closing or other miscellaneous actions desired after selecting a descendant of </p>
              <p className="text-justify tecnologyDescription mt-1">
               Does nothing if no or descendants exist. The callback is called with an eventKey, which is a prop from the selected  descendant, and an eventA callback fired when a descendant of a child  is selected. Should be used to execute complex closing or other miscellaneous actions desired after selecting a descendant of . Does nothing if no or descendants exist. The callback is called with an eventKey, which is a prop from the selected  descendant, and an event</p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
