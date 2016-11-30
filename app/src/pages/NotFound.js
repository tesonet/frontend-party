import React from 'react';
import { Link } from 'react-router';
import './NotFound.scss';

const NotFound = () => (
  <div className="page not-found">
    <h1>404 Page Not Found!</h1>
    <h3>
      <Link to="/">Grįžti į pagrindinį puslapį</Link>
    </h3>
  </div>
);

export default NotFound;
