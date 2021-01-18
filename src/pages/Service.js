import React, {Component,Fragment} from 'react';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import OtherPageTop from '../components/OtherPageTop/OtherPageTop';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';

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
        <Services/>
        <Footer/>
      </Fragment>
    )
    }
}