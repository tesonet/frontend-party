import * as React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

interface NotificationProps {
  onClose: () => void;
  message: string;
  type?: 'error' | 'warning' | 'success';
}

const NotificationWrapper = styled.div<Partial<NotificationProps>>`
  display: flex;
  justify-content: space-between;
  min-height: 5.5rem;
  background-color: ${({ type }) => {
    switch (type) {
      case 'error':
        return themeGet('colors.error');
      case 'warning':
        return themeGet('colors.warning');
      case 'success':
        return themeGet('colors.primary');
      default:
        return themeGet('colors.primary');
    }
  }};
  color: ${themeGet('colors.white')};
  align-items: center;
  padding: 0 1.5rem;
  width: 100%;
  position: fixed;
  top: 0;
`;

const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: inherit;
  color: ${themeGet('colors.white')};
`;

export const Notification = ({ onClose, message, type }: NotificationProps) => (
  <NotificationWrapper type={type}>
    <div>{message}</div>
    <CloseButton onClick={onClose}>x</CloseButton>
  </NotificationWrapper>
);
