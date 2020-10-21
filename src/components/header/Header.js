import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
        <ul>
          <li>
            <Link to="/form">Форма</Link>
          </li>
          <li>
            <Link to="/palette">Палитра</Link>
          </li>
        </ul>
      </header>
    )
}

export default Header;