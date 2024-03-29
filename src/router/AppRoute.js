import React, { Component, Fragment } from 'react'
import { Route,Switch } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Service from '../pages/Service';
import Contact from '../pages/Contact';
import Course from '../pages/Course';
import Portfolio from '../pages/Portfolio';
import RefundPage from '../pages/RefundPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';

export default class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/service" component={Service}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/course" component={Course}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/refund" component={RefundPage}/>
          <Route exact path="/terms" component={TermsPage}/>
          <Route exact path="/privacy" component={PrivacyPage}/>
          <Route exact path="/projectdetails/:id/:name" component={ProjectDetailsPage}/>
          <Route exact path="/CourseDetails" component={CourseDetailsPage}/>
        </Switch>
      </Fragment>
    )
  }
}
