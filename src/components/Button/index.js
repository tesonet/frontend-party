import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

function Button({ text, className, type }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={cx('button', className)}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
};

export default Button;
