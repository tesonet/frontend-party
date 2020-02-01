import React from 'react'
import PropTypes from 'prop-types'
import styled, {keyframes} from 'styled-components'
import {space, variant} from 'styled-system'
import theme from '../styles/theme'

const sizeVariant = variant({
  prop: 'size',
  variants: {
    small: {
      width: 10,
      height: 10,
    },
    medium: {
      width: 20,
      height: 20,
    },
    large: {
      width: 40,
      height: 40,
    },
  },
})

const SVG_SIZE = 44

const keyframesRotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const keyframesStroke = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`

const SpinnerWrapper = styled.div`
  width: 20px;
  height: 20px;
  animation: ${keyframesRotate} 1.4s ease-in-out infinite;
  color: ${props => props.fillColor};
  ${space}
  ${sizeVariant}
`

const Circle = styled.circle`
  animation: ${keyframesStroke} 1.4s ease-in-out infinite;
  stroke-dasharray: 80px, 200px;
  stroke-dashoffset: 0px;
  stroke: currentColor;
`

const Spinner = ({color, size, thickness, ...other}) => {
  return (
    <SpinnerWrapper fillColor={color} size={size} role="progressbar" {...other}>
      <svg viewBox={`${SVG_SIZE / 2} ${SVG_SIZE / 2} ${SVG_SIZE} ${SVG_SIZE}`}>
        <Circle
          cx={SVG_SIZE}
          cy={SVG_SIZE}
          r={(SVG_SIZE - thickness) / 2}
          fill="none"
          strokeWidth={thickness}
        />
      </svg>
    </SpinnerWrapper>
  )
}

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  thickness: PropTypes.number,
}

Spinner.defaultProps = {
  color: theme.palette.primary.main,
  size: 'medium',
  thickness: 4,
}

export default Spinner
