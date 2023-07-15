import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import DisplayBooks from './DisplayBooks';
import Categories from './Categories';
import '../styles/Bookstore.css';

const Bookstore = () => (
  <div className="Bookstore">
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<DisplayBooks />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<h3>Not Found</h3>} />
      </Routes>
    </HashRouter>
  </div>
);

export default Bookstore;
