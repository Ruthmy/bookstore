import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App';
import { fetchBooks } from './redux/books/booksSlice';
import './index.css';

// Fetch the books from the API
store.dispatch(fetchBooks());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
