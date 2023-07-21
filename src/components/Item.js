import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import '../styles/Item.css';

const Item = ({ id, item }) => {
  const dispatch = useDispatch();
  return (
    <div className="item">
      <div className="item-info">
        <p className="category">
          {item.category}
        </p>
        <h3 className="title">
          {item.title}
        </h3>
        <p className="author">
          {item.author}
        </p>
        <button
          className="btn btn-remove"
          onClick={() => dispatch(deleteBook(id))}
          type="button"
        >
          Remove
        </button>
      </div>
      <div className="item-progress">
        <div className="oval" />
        <div className="progress">
          <p className="percent">64%</p>
        </div>
      </div>
      <div className="item-chapter">
        <p className="current">Current Chapter</p>
        <p className="chapter">Chapter 17</p>
        <button className="btn btn-update" type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;
