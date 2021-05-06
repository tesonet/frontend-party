import Button from 'components/core/Button/Button'
import React from 'react'
import { useHistory, useLocation } from 'react-router'
import { NotFoundWrapper } from './NotFound.style'

const NotFound: React.FC = () => {
  const location = useLocation()
  const history = useHistory()
  const content = `The page ${location.pathname} was not found in this party`

  const returnToHome = () => {
    history.push('/')
  }

  return (
    <NotFoundWrapper>
      <div>{content}</div>
      <Button big title="Go to main page" onClick={returnToHome} />
    </NotFoundWrapper>
  )
}

export default NotFound
