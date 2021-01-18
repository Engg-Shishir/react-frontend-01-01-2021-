import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import OtherPageTop from '../components/OtherPageTop/OtherPageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import AboutDescription from "../components/AboutDescription/AboutDescription";

export default class About extends Component {

  // For Page Load in at the top
  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    return (
      <Fragment>
          <TopNavigation title="About Me"/>
          <OtherPageTop title="About Me"/>
          <AboutDescription/>
          <Footer/>
      </Fragment>
    )
  }
}
