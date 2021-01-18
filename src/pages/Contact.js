import React, { Component, Fragment } from 'react';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import OtherPageTop from '../components/OtherPageTop/OtherPageTop';
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from '../components/Footer/Footer';

export default class Contact extends Component {  
  
  // For Page Load in at the top
  componentDidMount(){
    window.scroll(0,0)
  }
  
  render() {
    return (
      <Fragment>
        <TopNavigation title="Contact Me"/>
        <OtherPageTop title="Contact Me"/>
        <ContactSection/>
        <Footer/>
      </Fragment>
    )
  }
}