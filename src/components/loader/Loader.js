import React from 'react';
import PropTypes from 'prop-types';
import style from './Loader.scss';

const Loader = ({ loading, children }) => {
  if (loading) {
    return (
      <div className={style.loading}>
        <div className={style.loadingRing} />
        { children }
      </div>
    );
  }
  return (children);
};

Loader.defaultProps = {
  loading: '',
  children: [],
};

Loader.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Loader;
