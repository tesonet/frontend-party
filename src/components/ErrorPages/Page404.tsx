import React from 'react';

import './Page404.scss';

const Page404: React.FC = () => (
  <img
    src='/static/images/404.png'
    className="error__image"
    alt='Page not found'
  />
);

export default Page404;
