import React from 'react';
import PropTypes from 'prop-types';

function LoadingBackground(props) {
  const ComponentToRender = props.component;
  let content = <div />;

    content = <ComponentToRender />;

  return (
    <div style={{ width: '100%' }}>
      {content}
    </div>
  );
}

LoadingBackground.propTypes = {
  component: PropTypes.func.isRequired,
};

export default LoadingBackground;
