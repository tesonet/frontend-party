import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import ReactDOM from 'react-dom'
import { LoadingWrapper } from './Loading.style'
import Spinner from '../Spinner/Spinner'

export interface LoadingProps {
  visible: boolean
  content?: React.ReactNode
}

export const LoadingContainer: React.FC<LoadingProps> = ({ content = <Spinner />, visible }) => {
  return (
    <>
      <CSSTransition
        unmountOnExit={true}
        classNames="visible"
        in={visible}
        appear={visible}
        timeout={300}
      >
        <LoadingWrapper>{content}</LoadingWrapper>
      </CSSTransition>
    </>
  )
}

const loadingClassName = 'loading__container'

export const usePortalDiv = (): Element | undefined => {
  const [divEl, setDivEl] = useState<Element>()

  useEffect(() => {
    const loadingElement =
      document.querySelector(`.${loadingClassName}`) ||
      document.body.appendChild(document.createElement('div', {}))
    loadingElement.classList.add(loadingClassName)

    setDivEl(loadingElement)
  }, [])

  return divEl
}

export const Loading: React.FC<LoadingProps> = ({ ...props }) => {
  const divEl = usePortalDiv()

  if (!divEl) return null

  return ReactDOM.createPortal(<LoadingContainer {...props} />, divEl)
}
