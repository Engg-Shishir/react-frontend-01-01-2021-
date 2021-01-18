import React, {Component,Fragment} from 'react';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import OtherPageTop from '../components/OtherPageTop/OtherPageTop';
import TermsDescription from "../components/TermsDescription/TermsDescription";
import Footer from '../components/Footer/Footer';

class TermsPage extends Component {
  
    // For Page Load in at the top
    componentDidMount(){
      window.scroll(0,0)
    }
    
    render() {
        return (
            <Fragment>
                <TopNavigation title="Terms & Condition"/>
                <OtherPageTop title="Terms & Condition"/>
                <TermsDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TermsPage;