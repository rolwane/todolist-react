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
    this.changeStatus = this.changeStatus.bind(this);
  }

  componentDidMount() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.setState({ tasks: savedTasks });
  }

  saveTasks() {
    const { tasks } = this.state;
    const result = JSON.stringify(tasks);
    localStorage.tasks = result;
  }

  addTask(newTask) {
    const { tasks } = this.state;
    const checkTitle = newTask.title.match(/[a-z]|[A-Z]/g);
    if (newTask.id > 0 && checkTitle !== null) {
      this.setState({ tasks: [...tasks, newTask] }, this.saveTasks);
    }
  }

  removeTask(id) {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter((task) => task.id !== id);
    this.setState({ tasks: updatedTasks }, this.saveTasks);
  }

  changeStatus(index) {
    const { tasks } = this.state;
    const currentTask = tasks[index];

    if (currentTask.done) {
      currentTask.done = false;
    } else {
      currentTask.done = true;
    }

    tasks[index] = currentTask;
    this.setState({ tasks }, this.saveTasks);
  }

  render() {
    const { tasks } = this.state;

    return (
      <div className="box">
        <FormTask onAdd={this.addTask} />
        <ol className="list">
          {
          tasks.map((task, index) => (
            <Task
              data={{ ...task, index }}
              onRemove={this.removeTask}
              onFinish={this.changeStatus}
              key={task.id}
            />
          ))
          }
        </ol>
      </div>
    );
  }
}

export default App;
