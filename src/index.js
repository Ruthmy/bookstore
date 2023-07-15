import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Bookstore from './components/Bookstore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bookstore />
  </React.StrictMode>,
);
