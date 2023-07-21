import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { bookstoreAPI } from '../../API/bookstoreAPI';

// Create an async thunk to fetch the books
export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    try {
      const response = await axios.get(`${bookstoreAPI.baseUrl}${bookstoreAPI.appId}/books/`);
      return response.data;
    } catch (error) {
      throw error.response;
    }
  },
);

// Create an async thunk to add a book
export const addBookAsync = createAsyncThunk(
  'books/addBookAsync',
  async (newBookData, thunkAPI) => {
    axios.post(`${bookstoreAPI.baseUrl}${bookstoreAPI.appId}/books/`, newBookData)
      .then((response) => {
        if (response.data === 'Created') {
          thunkAPI.dispatch(fetchBooks());
        }
      }).catch((error) => thunkAPI.rejectWithValue(error.response.data));
  },
);

// Create an async thunk to delete a book
export const deleteBookAsync = createAsyncThunk(
  'books/deleteBookAsync',
  async (bookId, thunkAPI) => {
    axios.delete(`${bookstoreAPI.baseUrl}${bookstoreAPI.appId}/books/${bookId}`)
      .then((response) => {
        if (response.data === 'The book was deleted successfully!') {
          thunkAPI.dispatch(fetchBooks());
        }
        return response.data;
      }).catch((error) => thunkAPI.rejectWithValue(error.response.data));
  },
);

const initialState = {
  books: [],
  status: 'idle',
  error: '',
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // Get all books
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.books = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
    // Add a book
    builder.addCase(addBookAsync.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(addBookAsync.fulfilled, (state) => {
      state.status = 'succeeded';
    });
    builder.addCase(addBookAsync.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
    // Delete a book
    builder.addCase(deleteBookAsync.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(deleteBookAsync.fulfilled, (state) => {
      state.status = 'succeeded';
    });
    builder.addCase(deleteBookAsync.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },

});

// Export the full reducer
export default booksSlice.reducer;
