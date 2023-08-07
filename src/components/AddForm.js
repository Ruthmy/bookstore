import React from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync } from '../redux/books/booksSlice';
import '../styles/AddForm.css';

const AddForm = () => {
  const [titleInput, setTitleInput] = React.useState('');
  const [authorInput, setAuthorInput] = React.useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    try {
      // If dispatch is successful, the book will be added and form fields will be reset.
      dispatch(
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
      <div className="AddForm-line" />
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="title">
            <input
              type="text"
              className="form-control input-title"
              placeholder="Book title"
              id="title"
              value={titleInput}
              onChange={(event) => setTitleInput(event.target.value)}
              required
            />
          </label>
          <label htmlFor="author">
            <input
              type="text"
              className="form-control input-author"
              placeholder="Book author"
              id="author"
              value={authorInput}
              onChange={(event) => setAuthorInput(event.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="category">
            <select
              className="form-control"
              id="category"
              required
            >
              <option value="Fiction">Fiction</option>
              <option value="Nonfiction">Nonfiction</option>
              <option value="Romance">Romance</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Mystery">Mystery</option>
              <option value="Thriller">Thriller</option>
              <option value="Horror">Horror</option>
              <option value="Children">Children</option>
              <option value="History">History</option>
              <option value="Poetry">Poetry</option>
              <option value="Biography">Biography</option>
              <option value="Science">Science</option>
            </select>
          </label>
        </div>
        <button
          type="submit"
          className="btn-add"
        >
          ADD BOOK
        </button>
      </form>
      <div id="error" />
    </div>
  );
};

export default AddForm;
