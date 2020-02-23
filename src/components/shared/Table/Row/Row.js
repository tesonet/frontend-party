import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Container from '../../Container';
import styles from '../Table.module.scss';

const Row = ({ children, head }) => {
  return (
    <div
      className={cx(styles['row'], {
        [styles['head']]: !!head
      })}
    >
      <Container>
        <div className={styles['row-content']}>{children}</div>
      </Container>
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  head: PropTypes.bool
};

export default Row;
