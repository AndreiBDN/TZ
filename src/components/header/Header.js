import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header>
        <ul>
          <li>
            <NavLink to="/form">Форма</NavLink>
          </li>
          <li>
            <NavLink to="/palette">Палитра</NavLink>
          </li>
        </ul>
      </header>
    )
}

export default Header;