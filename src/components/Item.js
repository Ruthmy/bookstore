import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookAsync } from '../redux/books/booksSlice';
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
        <div className="item-links">
          <button className="btn-comments" type="button">
            Comments
          </button>
          <div className="line-btn" />
          <button
            className="btn-remove"
            onClick={() => dispatch(deleteBookAsync(id))}
            type="button"
          >
            Remove
          </button>
          <div className="line-btn" />
          <button className="btn-edit" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="item-progress">
        <div className="progress-bar" />
        <div>
          <p className="percent">64%</p>
          <p className="completed">Completed</p>
        </div>
        <div className="line" />
      </div>
      <div className="item-chapter">
        <div>
          <p className="current">CURRENT CHAPTER</p>
          <p className="chapter">Chapter 17</p>
        </div>
        <button className="btn-update" type="button">
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
