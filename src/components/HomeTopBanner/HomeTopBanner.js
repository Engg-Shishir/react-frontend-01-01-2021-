
import React, { Component, Fragment} from 'react';
import { Container, Row,Button , Col} from 'react-bootstrap';


export default class HomeTopBanner extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedBaner p-0">
           <div className="topBannnerOverlay">
             <Container className="topContent">
               <Row>
                 <Col className="text-center">
                  <h1 className="topTitle">SOFTWARE ENGINER</h1>
                  <h4 className="topSubTitle">Mobile and web Application</h4>
                  <button className="btn btn-outline-light">More Info</button>
                 </Col>
               </Row>
             </Container>
           </div>
        </Container>
      </Fragment>
    )
  }
}
