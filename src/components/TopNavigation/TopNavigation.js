import React, {Component,Fragment} from 'react';
// import react-bootstrap component
import {Nav, Navbar} from "react-bootstrap";
import { NavLink } from 'react-router-dom';

// import logo for NavBar
import NavLogo from '../../asset/images/navBar/navlogo.svg';
import navlogoScroll from '../../asset/images/navBar/navlogoScroll.svg';

class TopNavigation extends Component {
  // create a constructor with state to change navbar style vehabiur when i scroll page
    constructor(props){
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[NavLogo],
            navBarient:"dark",
            navBarBackGround:"navBackground",
            navBarItem:"navItem",
            pageTitle:props.title
        }
    }

    // scroll functionality to change Navbar Style
    onScroll=()=>{
        // If window.scroll>100 
        if(window.scrollY>100){
            this.setState({navBarTitle:'navTitleScroll', navBarLogo:[navlogoScroll], navBarBackGround:'navBackgroundScroll',navBarItem:'navItemScroll',navBarient:'light'})
        }
        // in normal position 
        else if(window.scrollY<100){
            this.setState({navBarTitle:'navTitle',navBarLogo:[NavLogo],navBarBackGround:'navBackground',navBarItem:'navItem',navBarient:'dark'})
        }
    }
    
    // life cycle meathoad componentDidMount. Which call automaticaly when page scroll
    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }

    render() {
        return (
            <Fragment>
                {/* Set Dynamic PageTitle */}
               <title>{this.state.pageTitle}</title>
               {/* Call this.state.navBarBackGround */}
                <Navbar variant={this.state.navBarient} className={this.state.navBarBackGround} fixed="top" collapseOnSelect expand="lg">
                   {/* Call state inside Navbar.Brand*/}
                    <Navbar.Brand className={this.state.navBarTitle}><img src={this.state.navBarLogo} alt="not"/> Shishir Bhuiyan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>                     
                        <Nav>
                            {/* Call this.state.navBarItem */}
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/about">ABOUT</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/service">SERVICES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/course">COURSES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/contact">CONTACT</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
            </Fragment>
        );
    }
}

export default TopNavigation;