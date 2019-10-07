import * as React from 'react';

import { Theme, styled } from './theme';

type ButtonStyle = 'cta' | 'ghost';
type ButtonType = 'button' | 'submit' | 'reset';

export type ButtonSize = 'small' | 'normal' | 'large';

export interface ButtonProps {
  onClick?: () => void;
  type?: ButtonType;
  styleType: ButtonStyle;
  disabled?: boolean;
  fullWidth?: boolean;
  buttonSize?: ButtonSize;
  className?: string;
}

type ButtonComponentProps = ButtonProps & Theme;

const getColor = ({ theme, styleType }: ButtonComponentProps) => {
  const { colors } = theme;

  switch (styleType) {
    case 'ghost':
      return colors.black;
    case 'cta':
      return colors.white;
  }
};

const getBgColor = (
  { theme, disabled, styleType }: ButtonComponentProps,
  hover?: boolean,
) => {
  const { colors } = theme;

  switch (styleType) {
    case 'cta':
      return disabled
        ? colors.border
        : hover
        ? colors.primaryDark
        : colors.primary;
    case 'ghost':
      return 'transparent';
  }
};

const getBorderColor = (
  { theme, disabled, styleType }: ButtonComponentProps,
  hover?: boolean,
) => {
  const { colors } = theme;

  switch (styleType) {
    case 'ghost':
      return 'transparent';
    case 'cta':
      return disabled
        ? colors.border
        : hover
        ? colors.primaryDark
        : colors.primary;
  }
};

const getSize = ({ buttonSize }: ButtonComponentProps) => {
  switch (buttonSize) {
    case 'large':
      return '50px';
    case 'small':
      return '32px';
    default:
      return '40px';
  }
};

const StyledButton = styled.button`
  font-family: ${p => p.theme.fonts.family};
  font-weight: ${p => p.theme.fonts.weight.bold};
  font-size: ${p => p.theme.fonts.sizes.large};
  height: ${getSize};
  outline: none;
  cursor: pointer;
  color: ${getColor};
  background-color: ${getBgColor};
  border-color: ${getBorderColor};
  width: ${(p: ButtonComponentProps) => (p.fullWidth ? '100%' : 'auto')};
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 8px;

  &:hover {
    background-color: ${p => getBgColor(p, true)};
    border-color: ${p => getBorderColor(p, true)};
  }

  &:disabled {
    cursor: default;
  }
`;

const Button: React.FunctionComponent<ButtonProps> = ({
  type,
  children,
  onClick,
  styleType,
  disabled = false,
  fullWidth = false,
  buttonSize,
  className,
}) => {
  return (
    <StyledButton
      className={className}
      type={type}
      onClick={onClick}
      styleType={styleType}
      disabled={disabled}
      fullWidth={fullWidth}
      buttonSize={buttonSize}
    >
      {children}
    </StyledButton>
  );
};

export { Button };
