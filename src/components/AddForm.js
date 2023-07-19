import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import '../styles/AddForm.css';

const AddForm = () => {
  const [titleInput, setTitleInput] = React.useState('');
  const [authorInput, setAuthorInput] = React.useState('');
  const dispatch = useDispatch();
  return (
    <div className="AddForm">
      <h3>ADD NEW BOOK</h3>
      <form>
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
          onClick={() => dispatch(addBook())}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddForm;
