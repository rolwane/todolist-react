import React, { Component } from 'react';

// imported components
import FormTask from './components/FormTask';
import Task from './components/Task';

class App extends Component {
  constructor() {
    super();

    this.state = { tasks: [] };
    this.addTask = this.addTask.bind(this);
  }

  addTask(newTask) {
    const { tasks } = this.state;
    const checkTitle = newTask.title.match(/[a-z]|[A-Z]/g);

    if (newTask.id > 0 && checkTitle !== null) {
      this.setState({ tasks: [...tasks, newTask] });
    }
  }

  render() {
    const { tasks } = this.state;

    return (
      <div className="box">
        <FormTask onAdd={this.addTask} />
        <ol className="list">
          {tasks.map((task) => <Task title={task.title} key={task.id} />)}
        </ol>
      </div>
    );
  }
}

export default App;
