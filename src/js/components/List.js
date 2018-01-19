import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <ul>
    {articles.map(el => (
      <li key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

ConnectedList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default List;