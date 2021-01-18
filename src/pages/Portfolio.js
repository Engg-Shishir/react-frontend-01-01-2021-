import React, { Component, Fragment } from 'react';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import OtherPageTop from '../components/OtherPageTop/OtherPageTop';
import Portfolios from "../components/Portfolios/Portfolios";
import Footer from '../components/Footer/Footer';

export default class Portfolio extends Component {
  
  // For Page Load in at the top
  componentDidMount(){
    window.scroll(0,0)
  }
  
  render() {
    return (
      <Fragment>
        <TopNavigation title="My works"/>
        <OtherPageTop title="My Portfolio"/>
        <Portfolios/>
        <Footer/>
      </Fragment>
    )
  }
}