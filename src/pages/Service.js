import React, {Component,Fragment} from 'react';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import OtherPageTop from '../components/OtherPageTop/OtherPageTop';
import AllServices from '../components/AllServices/AllServices';
import Footer from '../components/Footer/Footer';
import ContactSection from '../components/ContactSection/ContactSection';

export default class Service extends Component {
  
  // For Page Load in at the top
  componentDidMount(){
    window.scroll(0,0)
  }
  
  render() {
    return (
      <Fragment>
        <TopNavigation title="Services"/>
        <OtherPageTop  title="My Services"/>
        <AllServices/>
        <ContactSection/>
        <Footer/>
      </Fragment>
    )
    }
}