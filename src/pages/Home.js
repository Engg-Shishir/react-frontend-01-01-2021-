import React, { Component } from 'react'

//import component
import TopNavigaion from '../components/TopNavigation/TopNavigation';
import HomeTopBanner from '../components/HomeTopBanner/HomeTopBanner';
import Services from '../components/Services/Services';
import Analysis from '../components/Analysis/Analysis';
import Summary from '../components/Summary/Summary';
import RecentProject from '../components/RecentProject/RecentProject';
import Course from '../components/Course/Course';
import Video from '../components/Video/Video';
import ClientReview from '../components/ClientReview/ClientReview';
import Footer from '../components/Footer/Footer';

export default class Home extends Component {
  
  // For Page Load in at the top
  componentDidMount(){
    window.scroll(0,0)
  }
  
  render() {
    return (
      <div>
        <TopNavigaion title="Home"/>
        <HomeTopBanner />
        <Services/>
        <Analysis/>
        <Summary/>
        <RecentProject />
        <Course/>
        <Video/>
        <ClientReview/>
        <Footer/>
      </div>
    )
  }
}
