import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { title } = this.props;

    return <li>{title}</li>;
  }
}

export default Task;

Task.propTypes = {
  title: PropTypes.string,
}.isRequired;
