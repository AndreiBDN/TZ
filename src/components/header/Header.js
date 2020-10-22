import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header>
        <ul className="header-nav">
          <li className="header-nav-item">
            <NavLink
             className="header-nav__link"
              to="/form">Форма</NavLink>
          </li>
          <li className="header-nav-item">
            <NavLink
             className="header-nav__link"
              to="/palette">Палитра</NavLink>
          </li>
        </ul>
      </header>
    )
}

export default Header;