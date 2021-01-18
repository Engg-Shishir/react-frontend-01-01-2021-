import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import OtherPageTop from '../components/OtherPageTop/OtherPageTop';
import AllCourses from "../components/AllCourses/AllCourses";
import Footer from '../components/Footer/Footer';

export default class Course extends Component {
  
  // For Page Load in at the top
  componentDidMount(){
    window.scroll(0,0)
  }
  
  render() {
    return (
      <Fragment>
        <TopNavigation title="Our Course"/>
        <OtherPageTop  title="All Courses"/>
        <AllCourses/>
        <Footer/>
      </Fragment>
    )
  }
}