import React, { Component } from 'react';
import SidebarNavigation from '../components/dashboardPageComponents/sidebarNavigation/MyProjects';
import Content from '../components/dashboardPageComponents/contentComponents/Content';
import { connect } from 'react-redux';
import { authChecker, showImagePage } from '../redux/actions';
import { Navbar } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { signsOut, setFocus, clearState, getsProject, getsTest } from '../redux/actions';

export default class DashboardPage extends Component {
  handleLogout () {
    this.props.dispatch(signsOut());
    this.props.dispatch(clearState());
  }

  componentDidMount () {
    console.log('mounted')
    this.props.dispatch(getsProject())
    setTimeout(() => {
      if (this.props.projects.list) {
        this.props.dispatch(getsTest({ projectId: this.props.projects.list[this.props.projects.list.length - 1].id }));
        this.props.dispatch(setFocus('project', this.props.projects.list[this.props.projects.list.length - 1]));
        this.props.dispatch(setFocus('test', this.props.tests.list[this.props.tests.length - 1]));
      }
    }, 500);

    setTimeout(() => {
      window.removeHeatmap();
    }, 1200);
  }

  render () {
    return (
      <div className = "DashboardPage">
        <Navbar className="navbar navbar-inverse">
          <a className="navbar-brand" href="#">Scrutinize</a>
          <Nav className="navbar-nav navbar-right">
            <NavItem onClick={ this.handleLogout.bind(this) } href = "#">Log Out</NavItem>
          </Nav>
        </Navbar>
        <SidebarNavigation />
        <Content />
      </div>
    );
  }
};

const select = (state) => state

export default connect(select)(DashboardPage)