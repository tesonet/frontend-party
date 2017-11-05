/**
 * NotFoundPage
 *
 * Not found page is being displayed when route is not defined
 */

import React from 'react';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <h1>Page not found, sorry.</h1>
    );
  }
}
