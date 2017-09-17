import * as React from 'react';
import styled from 'styled-components';
import styles from '../styles';

export default () => (
  <Loader className='fa fa-refresh fa-spin' />
);

const Loader = styled.i`
  font-size: 40px;
  color: ${styles.colors.gray3};
`;
