import React from 'react'
import PropTypes from 'prop-types'
import styled, {keyframes} from 'styled-components'

const SIZE = 44

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
  color: ${props => props.color};
`

const Circle = styled.circle`
  animation: ${keyframesStroke} 1.4s ease-in-out infinite;
  stroke-dasharray: 80px, 200px;
  stroke-dashoffset: 0px;
  stroke: currentColor;
`

const Spinner = ({color, thickness, ...other}) => {
  return (
    <SpinnerWrapper color={color} role="progressbar" {...other}>
      <svg viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}>
        <Circle
          cx={SIZE}
          cy={SIZE}
          r={(SIZE - thickness) / 2}
          fill="none"
          strokeWidth={thickness}
        />
      </svg>
    </SpinnerWrapper>
  )
}

Spinner.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.number,
}

Spinner.defaultProps = {
  color: null,
  thickness: 4,
}

export default Spinner
