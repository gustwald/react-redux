import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/index';

const mapStateToProps = state => {
  console.log(state);
  return { todos: state.todos };
};

const mapDispatchToProps = dispatch => {
  return{
    toggleTodo: id => dispatch(toggleTodo(id))
  };
};

const ConnectedList = ({ todos, toggleTodo }) => {
  const toggle = (id) => {
    toggleTodo(id);
  }

  return (
    <ul>
      {todos.map(el => (
        <li key={el.id} onClick={() => toggle(el.id)} style={{textDecoration: el.completed ? 'line-through' : 'none'}}>
          {el.payload}
        </li>
      ))}
    </ul>
  );
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

ConnectedList.propTypes = {
    todos: PropTypes.array.isRequired
};

export default List;