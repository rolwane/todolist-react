import React, { Component } from 'react';
import './style.css';

class EmptyTask extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return <span className="empty-task">Tudo limpo!</span>;
  }
}

export default EmptyTask;
