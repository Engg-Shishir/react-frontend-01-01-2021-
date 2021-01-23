
import React, { Component, Fragment} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';

class HomeTopBanner extends Component {


  constructor(){
    super();
    this.state={
      title:"",
      subTitle:""
    }
  }
  
  //call componentDidMount().This meathod work when this compoent is load everytime
  componentDidMount(){
    RestClient.GetRequest(AppUrl.HomeTopTitle).then(result=>{
      this.setState({title:result[0]['homeTitle'],subTitle:result[0]['homeSubTitle']})
    }).catch(error=>{// if something is going wrong
      this.setState({title:"Title Is Not Found",subTitle:"Something is going wrong"})
    });
  }

  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedBaner p-0">
           <div className="topBannnerOverlay">
             <Container className="topContent">
               <Row>
                 <Col className="text-center">
                  <h1 className="topTitle">{this.state.title}</h1>
                  <h4 className="topSubTitle">{this.state.subTitle}</h4>
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

export default HomeTopBanner;
