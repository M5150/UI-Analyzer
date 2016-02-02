import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

class Header extends Component {

  render() {
    return (
      <Navbar className="navbar-inverse landingPageHeader">
        <a className="navbar-brand" href="#">Scrutinize</a>
        <Nav className="navbar-nav navbar-right">
          <NavItem onClick={ () => this.props.authenticateClick('authenticated') }> Get Started </NavItem>
          <NavItem> Log In </NavItem>
        </Nav>
      </Navbar>
      )
  }
}; 

export default Header;