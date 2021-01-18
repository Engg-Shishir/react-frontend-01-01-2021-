
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class OtherPageTop extends Component {
  render() {
    return (
      <Fragment>
      <Container fluid={true} className="pageFixedBaner p-0">
         <div className="pageBannnerOverlay">
           <Container className="pageFixedBannerContent">
             <Row>
               <Col className="text-center">
                <h3 className="">{this.props.title}</h3>
               </Col>
             </Row>
           </Container>
         </div>
      </Container>
      </Fragment>
    )
  }
}
