import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class ProgressBar extends Component {
  constructor() {
    super();

    this.state = {};

    this.calcProgress = this.calcProgress.bind(this);
  }

  calcProgress() {
    const { data } = this.props;
    const unFinished = data.filter((task) => task.done === false);
    return `${((data.length - unFinished.length) * 100) / data.length}%`;
  }

  render() {
    return (
      <div className="progressbar" style={{ width: this.calcProgress() }} />
    );
  }
}

export default ProgressBar;

ProgressBar.propTypes = {
  tasks: PropTypes.object,
}.isRequired;
