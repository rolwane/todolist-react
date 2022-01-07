import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { FaTrash } from 'react-icons/fa';

class Task extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { data, onRemove, onFinish } = this.props;

    const {
      id, title, done, index,
    } = data;

    return (
      <li className="task-item" data-done={done}>
        <input type="checkbox" id={id} onChange={() => onFinish(index)} checked={done} />
        <label htmlFor={id}>
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
