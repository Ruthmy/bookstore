import React from 'react';
import { useSelector } from 'react-redux';
import AddForm from './AddForm';
import Item from './Item';
import '../styles/DisplayBooks.css';

const DisplayBooks = () => {
  // Get books from Redux store:
  const booksList = useSelector((state) => state.books);
  return (
    <div className="DisplayBooks">
      {booksList.map((book) => (
        <Item key={book.item_id} item={book} />
      ))}
      <AddForm />
    </div>
  );
};

export default DisplayBooks;
