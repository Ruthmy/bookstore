import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import Item from './Item';
import AddForm from './AddForm';
import '../styles/DisplayBooks.css';

const DisplayBooks = () => {
  const dispatch = useDispatch();
  // Get books from Redux store:
  const booksList = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="DisplayBooks">
      {booksList.books.length === 0
        ? <h3 className="empty">There are no books in the store, Add a book to start tracking!</h3>
        : Object.values(booksList.books).map((book, index) => {
          // Get the index of the book
          const bookIndex = Object.keys(booksList.books)[index];
          // Destructure the book object
          let item = {};
          [item] = Object.values(book).flat(1);

          return <Item key={bookIndex} id={bookIndex} item={item} />;
        })}
      <AddForm />
    </div>
  );
};

export default DisplayBooks;
