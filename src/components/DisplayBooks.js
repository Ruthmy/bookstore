import React from 'react';
import Item from './Item';
import BooksList from '../bd/BooksList';
import '../styles/DisplayBooks.css';
import AddForm from './AddForm';

const DisplayBooks = () => (
  <div className="DisplayBooks">
    {BooksList.map((book) => (
      <Item key={book.item_id} item={book} />
    ))}
    <AddForm />
  </div>
);

export default DisplayBooks;
