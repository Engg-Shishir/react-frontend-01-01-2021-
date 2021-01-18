import React, { Component, Fragment } from 'react';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import OtherPageTop from '../components/OtherPageTop/OtherPageTop';
import RefundDescription from "../components/RefundDescription/RefundDescription";
import Footer from '../components/Footer/Footer';

export default class RefundPage extends Component {
  
  // For Page Load in at the top
  componentDidMount(){
    window.scroll(0,0)
  }
  
  render() {
    return (
      <Fragment>
        <TopNavigation title="Refund Policy"/>
        <OtherPageTop title="Refund Policy"/>
        <RefundDescription/>
        <Footer/>
      </Fragment>
    )
  }
}
