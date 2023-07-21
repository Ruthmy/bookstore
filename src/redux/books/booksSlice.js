import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { bookstoreAPI } from '../../API/bookstoreAPI';

// Create an async thunk to fetch the books
export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await axios.get(`${bookstoreAPI.baseUrl}${bookstoreAPI.appId}/books/`);
    return response.data;
  },
);

// The following are selectors to query the Redux store
export const getAllBooks = (state) => state.books.books; // If fulfilled, the books will be here
export const getBooksError = (state) => state.books.error; // If rejected, the error will be here
export const getBooksStatus = (state) => state.books.status; // The status of the fetch request

const initialState = {
  books: [],
  status: 'idle',
  error: '',
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    deleteBook: (state, action) => {
      const index = state.books.findIndex(
        (book) => book.item_id === action.payload,
      );
      state.books.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.books = state.books.concat(action.payload);
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },

});

export const { addBook, deleteBook } = booksSlice.actions;

// Export the full reducer
export default booksSlice.reducer;
