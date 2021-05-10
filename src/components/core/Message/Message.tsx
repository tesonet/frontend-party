import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import ReactDOM from 'react-dom'
import { MessageWrapper } from './Message.style'
import { useSelector } from 'react-redux'

export const MessageContainer: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const error = useSelector(s => s.auth.error)

  useEffect(() => {
    if (error) {
      setVisible(true)
      setTimeout(() => {
        setVisible(false)
      }, 4000)
    }
  }, [error])

  return (
    <>
      <CSSTransition
        unmountOnExit={true}
        classNames="visible"
        in={visible}
        appear={visible}
        timeout={300}
      >
        <MessageWrapper>Invalid username or password</MessageWrapper>
      </CSSTransition>
    </>
  )
}

const MessageClassName = 'Message__container'

export const usePortalDiv = (): Element | undefined => {
  const [divEl, setDivEl] = useState<Element>()

  useEffect(() => {
    const MessageElement =
      document.querySelector(`.${MessageClassName}`) ||
      document.body.appendChild(document.createElement('div', {}))
    MessageElement.classList.add(MessageClassName)

    setDivEl(MessageElement)
  }, [])

  return divEl
}

export const Message: React.FC = ({ ...props }) => {
  const divEl = usePortalDiv()

  if (!divEl) return null

  return ReactDOM.createPortal(<MessageContainer {...props} />, divEl)
}
