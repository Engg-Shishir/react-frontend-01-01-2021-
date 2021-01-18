import React, {Component, Fragment} from 'react';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import OtherPageTop from '../components/OtherPageTop/OtherPageTop';
import PrivacyDescription from "../components/PrivacyDescription/PrivacyDescription";
import Footer from '../components/Footer/Footer';

class PrivacyPage extends Component {
  
    // For Page Load in at the top
    componentDidMount(){
      window.scroll(0,0)
    }
    
    render() {
        return (
            <Fragment>
                <TopNavigation title="Privacy"/>
                <OtherPageTop title="Privacy Policy"/>
                <PrivacyDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PrivacyPage;