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
      {booksList.books.map((book) => {
        // Get the index of the book
        let index = 0;
        [index] = Object.keys(book);
        // Destructure the book object
        let item = {};
        [item] = Object.values(book).flat(1);

        return <Item key={index} id={index} item={item} />;
      })}
      <AddForm />
    </div>
  );
};

export default DisplayBooks;
