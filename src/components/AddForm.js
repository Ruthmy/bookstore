import React from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync } from '../redux/books/booksSlice';
import '../styles/AddForm.css';

const AddForm = () => {
  const [titleInput, setTitleInput] = React.useState('');
  const [authorInput, setAuthorInput] = React.useState('');
  const dispatch = useDispatch();

  const onFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // If dispatch is successful, the book will be added and form fields will be reset.
      await dispatch(
        addBookAsync(
          {
            item_id: `item${Math.floor(Math.random() * 1000)}`,
            title: titleInput,
            author: authorInput,
            category: 'Fiction',
          },
        ),
      );
      setTitleInput('');
      setAuthorInput('');
    } catch (error) {
      // Handle the error, show a message in de div id error.
      const errorDiv = document.getElementById('error');
      errorDiv.innerHTML = `<p>Error adding book: ${error.message}</p>`;
      setTimeout(() => {
        errorDiv.innerHTML = '';
      }, 3000);
    }
  };

  return (
    <div className="AddForm">
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="title">
            <span>Title</span>
            <input
              type="text"
              className="form-control"
              id="title"
              value={titleInput}
              onChange={(event) => setTitleInput(event.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="author">
            <span>Author</span>
            <input
              type="text"
              className="form-control"
              id="author"
              value={authorInput}
              onChange={(event) => setAuthorInput(event.target.value)}
              required
            />
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-add"
        >
          Add Book
        </button>
      </form>
      <div id="error" />
    </div>
  );
};

export default AddForm;
