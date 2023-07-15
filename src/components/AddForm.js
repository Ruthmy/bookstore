import React from 'react';
import '../styles/AddForm.css';

const AddForm = () => (
  <div className="AddForm">
    <h3>ADD NEW BOOK</h3>
    <form>
      <div className="form-group">
        <label htmlFor="title">
          Title
          <input type="text" className="form-control" id="title" />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="author">
          Author
          <input type="text" className="form-control" id="author" />
        </label>
      </div>
      <button type="submit" className="btn btn-add">Add Book</button>
    </form>
  </div>
);

export default AddForm;
