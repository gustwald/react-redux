import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { todos: state.todos };
};

const ConnectedList = ({ todos, onClick }) => (
  <ul>
    {todos.map(el => (
      <li key={el.id} onClick={onClick}>
        {el.title}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

ConnectedList.propTypes = {
    todos: PropTypes.array.isRequired
};

export default List;