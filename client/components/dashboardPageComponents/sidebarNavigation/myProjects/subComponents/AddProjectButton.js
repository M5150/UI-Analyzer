import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleContentComponent } from '../../../../../redux/actions';

class AddProjectButton extends Component {
  handleClick () {
    this.props.dispatch(toggleContentComponent('AddProject'));
  }
  render () {
    return (
      <button className = "AddProjectButton" onClick = { this.handleClick.bind(this) }>
        Add Project
      </button>
    )
  }
}

const select = (state) => state.buttonReducer

export default connect(select)(AddProjectButton)