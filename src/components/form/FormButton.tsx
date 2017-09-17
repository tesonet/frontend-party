import * as React from 'react';
import styled from 'styled-components';
import styles from '../../styles';

interface IFormProps {
  disabled?: boolean;
  children: React.ReactElement<any> | Array<React.ReactElement<any>> | string;
}

export default (props: IFormProps) => (
  <Button
    disabled={props.disabled}
    type='submit'
  >
    {props.children}
  </Button>
);

const Button = styled.button`
  appearance: button;
  border: 0;
  border-radius: ${styles.borderRadius.m};
  background-color: ${styles.colors.primary};
  display: block;
  color: ${styles.colors.white};
  padding: ${styles.spacing(4)} ${styles.spacing(3)};
  outline: 0;
  font-weight: 500;
  font-size: ${styles.fontSize.m};
  transition: background-color ${styles.animation.duration.m};
  width: 100%;
  &:not([disabled]) {
    cursor: pointer;
    &:hover {
      background-color: ${styles.colors.primaryDarker};
    }
  }
  &[disabled] {
    opacity: 0.8;
  }
`;
