import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleTodo, commentTodo } from "../actions/index";

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      comment: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(e, el) {
    e.preventDefault();
    const comment = this.state.comment;
    const commentId = el.id;

    this.props.commentTodo(commentId, comment);

    this.setState({ comment: "" });
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e, this.props.todo)}>
        <div className="form-group">
          <input required value={this.state.comment} onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-danger btn-sm">
          kommentera
        </button>
      </form>
    );
  }
}

export default Comments;
