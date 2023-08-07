import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../bd/MenuData';
import '../styles/Navbar.css';

export default function Menu() {
  return (
    <nav>
      <div>
        <h1>Bookstore CMS</h1>
        <ul>
          {routes.map((route) => (
            <li key={route.text}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? '#121212' : '#888',
                })}
                to={route.to}
              >
                {route.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="profile" />
    </nav>
  );
}
