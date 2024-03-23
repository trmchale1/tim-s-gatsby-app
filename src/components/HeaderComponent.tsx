import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const HeaderComponent = () => {
  
    return (
    <header className="header">
      <nav className="header_nav">
        <ul className="header_nav_ul">
          <li>
            <Link to="/PayTim/">Pay Tim</Link>

          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;