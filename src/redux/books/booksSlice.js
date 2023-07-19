import { createSlice } from '@reduxjs/toolkit';

const initialState = []; // Estado inicial

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    deleteBook: (state, action) => {
      state.filter((book) => book.id !== action.id);
    },
  },
});

export const { addBook, deleteBook } = booksSlice.actions;

// Export the full reducer
export default booksSlice.reducer;

// Tengo que exportar ambos si quiero poder utilizarlos.
