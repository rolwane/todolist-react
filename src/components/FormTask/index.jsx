import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AiOutlinePlus } from 'react-icons/ai';
import idGenerator from '../../lib/idGenerator';
import './styles.css';

class FormTask extends Component {
  constructor() {
    super();

    this.state = { id: null, title: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({ id: idGenerator(), title: target.value });
  }

  handleSubmit(e, callback) {
    e.preventDefault();
    callback(this.state);
    this.setState({ id: null, title: '' });
  }

  render() {
    const { title } = this.state;
    const { onAdd } = this.props;

    return (
      <form onSubmit={(e) => this.handleSubmit(e, onAdd)}>
        <input type="text" value={title} onChange={this.handleChange} placeholder="Add a new task" />
        <button aria-label="add-button" type="submit"><AiOutlinePlus /></button>
      </form>
    );
  }
}

export default FormTask;

FormTask.propTypes = {
  onAddTask: PropTypes.func,
}.isRequired;
