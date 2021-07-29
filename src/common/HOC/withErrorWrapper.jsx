import React, { useState } from 'react';

const withErrorWrapper = (Component) => (props) => {
  const [isErrorShown, setIsErrorShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const showError = (message) => {
    setIsErrorShown(true);
    setErrorMessage(message);
  };

  return (
    <>
      {isErrorShown && errorMessage && (
      <div>
          {errorMessage}
      </div>
      )}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...props} showError={showError} />
    </>
  );
};

export default withErrorWrapper;
