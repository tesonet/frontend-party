import NotFound from 'components/NotFound/NotFound'
import React from 'react'
import BaseContainer from './BaseContainer'

const NotFoundContainer: React.FC = () => {
  return <BaseContainer content={<NotFound />} />
}
export default NotFoundContainer
