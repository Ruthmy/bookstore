import React from 'react';
import Item from './Item';
import BooksList from '../bd/BooksList';

const DisplayBooks = () => (
  <div className="DisplayBooks">
    <h3>Home</h3>
    {BooksList.map((book) => (
      <Item key={book.item_id} item={book} />
    ))}

  </div>
);

export default DisplayBooks;
