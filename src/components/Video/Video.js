import React, {Component,Fragment} from 'react';
import {Col, Container, Row, Modal, Button} from "react-bootstrap";
import 'video-react/dist/video-react.css';
import {Player,BigPlayButton} from 'video-react';

//import react-html-parser
import ReactHtmlParser from 'react-html-parser';

import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';

class Video extends Component {
  constructor(){
      super();
      this.state={
          show:false,
          videoDes:'',
          videoUrl:''
      }
  }

      //call componentDidMount().This meathod work when this compoent is load everytime
      componentDidMount(){
        RestClient.GetRequest(AppUrl.video).then(result=>{
            this.setState({
            videoDes:result[0]['videoDes'],
            videoUrl:result[0]['videoUrl']
          })
        });
      }

  modalClose=()=>this.setState({show:false})
  modalOpen=()=>this.setState({show:true})

    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col lg={12} md={12} sm={12} className="videoCard">
                            <div>
                                <p className="videoTitle">How I Do</p>
                                <p className="videoDes">                            { ReactHtmlParser(this.state.videoDes) }</p>
                                <p><i onClick={this.modalOpen} className="fas fa-play-circle"></i></p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                    <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                        <Modal.Body>
                            <Player>
                                <source src={this.state.videoUrl} />
                                <BigPlayButton position="center"/>
                            </Player>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={this.modalClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
            </Fragment>
        );
    }
}

export default Video;