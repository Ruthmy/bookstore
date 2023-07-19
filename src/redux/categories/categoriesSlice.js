import { createSlice } from '@reduxjs/toolkit';

const initialState = []; // Estado inicial

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      state.categories = action.payload === 'Under construction'
        ? 'Under construction'
        : state.categories;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

// Export the full reducer
export default categoriesSlice.reducer;

// Tengo que exportar ambos si quiero poder utilizarlos.
