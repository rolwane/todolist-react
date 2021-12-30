import React, { Component } from 'react';
import FormTask from './components/FormTask';

class App extends Component {
  constructor() {
    super();

    this.state = { tasks: [] };
    this.addTask = this.addTask.bind(this);
  }

  addTask(newTask) {
    const { tasks } = this.state;
    this.setState({ tasks: [...tasks, newTask] });
  }

  render() {
    return <FormTask onAdd={this.addTask} />;
  }
}

export default App;
