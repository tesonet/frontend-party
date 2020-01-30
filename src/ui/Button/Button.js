import React from 'react'
import PropTypes from 'prop-types'
import {space} from 'styled-system'
import styled, {css} from 'styled-components'
import theme from '../styles/theme'
import Spinner from '../Spinner'
import Icon from '../Icon'
import {size as styleSize, type as styleType} from './buttonStyle'

const BUTTON_TYPES = ['button', 'submit']

const ButtonBase = styled.button`
  ${theme.button}
  box-sizing: border-box;
  margin: 0;
  appearance: none;
  position: relative;
  min-width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, color 0.3s;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  ${space}
  ${styleSize}
  ${styleType}

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  ${Icon} {
    fill: currentColor;
    transition: fill 0.3s;
  }

  &:disabled {
    opacity: 0.8;
  }
`

const ButtonContent = styled.div`
  transition: opacity 0.3s ease;
  opacity: ${props => (props.hide ? 0 : 1)};
`

const AbsoluteSpinner = styled(Spinner)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`

const Button = ({
  children,
  type,
  fullWidth,
  variant,
  disabled,
  loading,
  onClick,
  startIcon,
  ...other
}) => {
  return (
    <ButtonBase
      as="button"
      type={type}
      fullWidth={fullWidth}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      {...other}>
      <ButtonContent hide={loading}>
        {!!startIcon && <Icon name={startIcon} mr={10} />}
        {children}
      </ButtonContent>
      {loading && <AbsoluteSpinner />}
    </ButtonBase>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(BUTTON_TYPES),
  variant: PropTypes.string,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  startIcon: PropTypes.oneOf(Icon.validIconNames),
}

Button.defaultProps = {
  fullWidth: false,
  type: 'button',
  variant: 'contained',
  size: 'medium',
  disabled: false,
  loading: false,
  onClick: null,
  startIcon: null,
}

export default Button
