import React, {Component, Fragment} from 'react';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import OtherPageTop from '../components/OtherPageTop/OtherPageTop';
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import Footer from '../components/Footer/Footer';

class ProjectDetailsPage extends Component {

    constructor({match}){
       super();
       this.state={
           projectId:match.params.id,
           projectName:match.params.name
       }
    }
  
    // For Page Load in at the top
    componentDidMount(){
      window.scroll(0,0)
    }
    
    render() {
        return (
            <Fragment>
                <TopNavigation title="Project Details"/>
                <OtherPageTop title={this.state.projectName}/>
                <ProjectDetails id={this.state.projectId}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;