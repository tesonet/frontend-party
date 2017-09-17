import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';
import styles from '../styles';

interface IAlertProps {
  center?: boolean;
  children: string;
}

export default (props: IAlertProps) => (
  <AlertStyled center={props.center}>
    {props.children}
  </AlertStyled>
);

interface IAlertStyledProps {
  center?: boolean;
}

const alert: StyledFunction<IAlertStyledProps & React.HTMLProps<HTMLDivElement>> = styled.div;
const AlertStyled = alert`
  border: 0;
  border-radius: ${styles.borderRadius.m};
  background-color: ${styles.colors.lightRed};
  color: ${styles.colors.darkRed};
  font-size: ${styles.fontSize.s};
  text-align: ${(props: IAlertStyledProps) => props.center ? 'center' : 'left'};
  margin-bottom: ${styles.spacing(3)};
  padding: ${styles.spacing(3)};
`;
