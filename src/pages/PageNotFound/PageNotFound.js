import React from 'react';

function PageNotFound({ location }) {
  document.title = `${document.title} - Page not found!`;

  return (
    <h3>
      Page not found at <code>{location.pathname}</code>
    </h3>
  );
}

export default PageNotFound;
