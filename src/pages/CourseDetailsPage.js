import React, {Component, Fragment} from 'react';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Footer from '../components/Footer/Footer';

class CourseDetailsPage extends Component {
  
    // For Page Load in at the top
    componentDidMount(){
      window.scroll(0,0)
    }
    
    render() {
        return (
            <Fragment>
                <TopNavigation title="Course Details"/>
                <CourseDetails/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetailsPage;