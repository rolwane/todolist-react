import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { FaTrash } from 'react-icons/fa';

class Task extends Component {
  constructor() {
    super();

    this.state = {
      done: false,
    };

    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(event) {
    if (event.target.checked) {
      this.setState({ done: true });
      return;
    }

    this.setState({ done: false });
  }

  render() {
    const { data, onRemove } = this.props;
    const { id, title } = data;
    const { done } = this.state;

    return (
      <li className="task-item">
        <input type="checkbox" id={id} onChange={this.handleCheck} />
        <label htmlFor={id} data-done={done}>
          {title}
        </label>
        <button type="button" className="btn-remove" aria-label="btn-remove" onClick={() => onRemove(id)}><FaTrash /></button>
      </li>
    );
  }
}

export default Task;

Task.propTypes = {
  title: PropTypes.string,
  onRemove: PropTypes.func,
}.isRequired;
