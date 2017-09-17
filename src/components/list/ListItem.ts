import styled from 'styled-components';
import styles from '../../styles';

export default styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid ${styles.colors.gray2};
  color: ${styles.colors.gray6};
  font-size: ${styles.fontSize.m};
  padding: 0 ${styles.spacing(3)};
  height: ${styles.spacing(12)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
