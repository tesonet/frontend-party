import React, {useState, forwardRef} from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

import theme from '../styles/theme'
import Box from '../Box'
import Icon from '../Icon'
import Popover from '../Popover'

const INPUT_TYPES = ['text', 'password']
const COLOR_PLACEHOLDER = theme.palette.grey[400]
const COLOR_INPUT = theme.palette.grey[600]

const InputWrapper = styled(Box)`
  display: block;
  width: 100%;
  position: relative;
  ${Icon} {
    fill ${COLOR_PLACEHOLDER};
  }
`
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;

  ${props =>
    props.align === 'right'
      ? css`
          right: 0;
        `
      : css`
          left: 0;
        `}
`

const InputBase = styled.input`
  ${theme.input}
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 0.9rem 1rem;
  border-radius: 0.3rem;
  background-color: ${theme.palette.common.white};
  border: 1px solid ${COLOR_INPUT};
  color: ${COLOR_INPUT};
  font-size: 1rem;
  -webkit-tap-highlight-color: transparent;

  ::placeholder {
    color: ${COLOR_PLACEHOLDER};
    opacity: 1;
  }

  ${props =>
    props.readOnly &&
    css`
      opacity: 0.8;
    `}

  ${props =>
    props.startIcon &&
    css`
      padding-left: 55px;
    `}

  ${props =>
    props.error &&
    css`
      border: 1px solid ${theme.palette.error.light};
      padding-right: 55px;
    `}

`

const AbsolutePopover = styled(Popover)`
  position: absolute;
  top: 100%;
  right: 0;
  transform: translateZ(0) scale(0);
  transition: transform 0.3s;
  z-index: 100;
  ${props =>
    props.visible &&
    css`
      transform: translateZ(0) scale(1);
    `}
`

const Input = forwardRef(
  (
    {
      type,
      name,
      label,
      value,
      onChange,
      startIcon,
      disabled,
      error,
      helperText,
      autoComplete,
      ...other
    },
    ref,
  ) => {
    const [hover, setHover] = useState(false)

    return (
      <InputWrapper {...other}>
        <InputBase
          ref={ref}
          type={type}
          name={name}
          placeholder={label}
          value={value}
          onChange={onChange}
          startIcon={startIcon}
          readOnly={disabled}
          error={error}
          autoComplete={autoComplete}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
        {startIcon && (
          <IconWrapper align="left">
            <Icon name={startIcon} />
          </IconWrapper>
        )}
        {error && (
          <IconWrapper align="right">
            <Icon name="alert" color={theme.palette.error.light} />
            <AbsolutePopover
              visible={hover}
              variant="danger"
              size="small"
              placement="top">
              {helperText}
            </AbsolutePopover>
          </IconWrapper>
        )}
      </InputWrapper>
    )
  },
)

Input.propTypes = {
  type: PropTypes.oneOf(INPUT_TYPES),
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  startIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  autoComplete: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
  label: '',
  startIcon: false,
  disabled: false,
  error: false,
  helperText: null,
  autoComplete: 'off',
}

export default Input
