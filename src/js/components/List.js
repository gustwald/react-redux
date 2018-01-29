import React, { Component } from "react";
import PropTypes from "prop-types";
import Comment from './Comment';
import { connect } from "react-redux";
import { toggleTodo, commentTodo } from "../actions/index";

class ConnectedList extends Component {

  propTypes: {
    todos: PropTypes.array.isRequired
  };

  toggle(id) {
    this.props.toggleTodo(id);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.payload}
            <input onClick={() => this.toggle(todo.id)} type="checkbox" />
            <ul>{todo.comments.map((comment, i) => (
            <p key={i}>{comment}</p>
            ))}
            </ul>
            <Comment commentTodo={this.props.commentTodo} todo={todo}/>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { todos: state.todos };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id)),
    commentTodo: (id, todo) => dispatch(commentTodo(id, todo))
  };
};

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;
