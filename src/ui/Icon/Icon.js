import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {space} from 'styled-system'

import selection from './selection.json'

const defaultIconMap = selection.icons.reduce((acc, icon) => {
  acc[icon.properties.name] = icon

  return acc
}, {})

const validIconNames = Object.keys(defaultIconMap)

const Icon = ({color, size, name, iconMap, className}) => {
  const currentIcon = iconMap[name]

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${currentIcon.icon.width || '1024'} 1024`}
      xmlns="http://www.w3.org/2000/svg">
      {currentIcon.icon.paths.map((path, index) => {
        // eslint-disable-next-line
        return <path fill={color} key={index} d={path} />
      })}
    </svg>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(validIconNames).isRequired,
  size: PropTypes.number,
  // eslint-disable-next-line
  iconMap: PropTypes.object,
  color: PropTypes.string,
}

Icon.defaultProps = {
  className: null,
  iconMap: defaultIconMap,
  size: 16,
  color: null,
}

Icon.validIconNames = validIconNames

export default styled(Icon)`
  display: inline-block;
  vertical-align: middle;
  ${space}
`
