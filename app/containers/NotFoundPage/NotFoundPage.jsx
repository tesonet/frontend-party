import React from 'react';
import { Helmet } from 'react-helmet';
import './NotFoundPage.scss';

const NotFound = (props) => (
  <article>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    <h1>Page not found.</h1>
  </article>
);

export default NotFound;
