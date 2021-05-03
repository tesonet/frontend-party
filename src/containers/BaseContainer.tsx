import { Loading } from 'components/core/Loading/Loading'
import React from 'react'

interface BaseContainerProps {
  content: any
  header?: any
  loading?: boolean
  error?: boolean
}

const BaseContainer: React.FC<BaseContainerProps> = ({
  content,
  header,
  error = false,
  loading = false,
}) => {
  return (
    <>
      {header && header}
      <Loading visible={loading} />
      <main>{content}</main>
    </>
  )
}

export default BaseContainer
