import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const FAIcon = ({type, className, ...props}) => (
  <i className={classNames('fa', `fa-${type}`, className)} aria-hidden='true' {...props} />
);

FAIcon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

FAIcon.defaultProps = {
  className: null,
};

export default FAIcon;
