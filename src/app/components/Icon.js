import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Icon = ({className, ...props}) => (
  <i className={classNames('fa', className)} aria-hidden='true' {...props} />
);

Icon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Icon;
