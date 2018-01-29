import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addTodo } from '../actions/index';

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (id, todo) => dispatch(addTodo(id, todo))
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const id = uuidv1();

    this.props.addTodo(id, this.state.title);
    this.setState({ title: ''});
  }

  render() {
    
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            required
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

ConnectedForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Form;