import React, { Component } from 'react';
import './App.css';

// imported components
import FormTask from './components/FormTask';
import Task from './components/Task';

class App extends Component {
  constructor() {
    super();

    this.state = { tasks: [] };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(newTask) {
    const { tasks } = this.state;
    const checkTitle = newTask.title.match(/[a-z]|[A-Z]/g);

    if (newTask.id > 0 && checkTitle !== null) {
      this.setState({ tasks: [...tasks, newTask] });
    }
  }

  removeTask(id) {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter((task) => task.id !== id);

    this.setState({ tasks: updatedTasks });
  }

  render() {
    const { tasks } = this.state;

    return (
      <div className="box">
        <FormTask onAdd={this.addTask} />
        <ol className="list">
          {
          tasks.map((task) => <Task data={task} onRemove={this.removeTask} key={task.id} />)
          }
        </ol>
      </div>
    );
  }
}

export default App;
