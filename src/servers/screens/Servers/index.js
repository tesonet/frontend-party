import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchServers} from '../../actions'
import {logoutUser} from '../../../auth/actions'
import {getServerList} from '../../selectors'

export default () => {
  const dispatch = useDispatch()
  const data = useSelector(getServerList)

  useEffect(() => {
    dispatch(fetchServers())
  }, [dispatch])

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch(logoutUser())
        }}>
        Logout
      </button>
      <ul>
        {data.map(item => {
          return (
            <li
              key={`${item.name}-${item.distance}`}>{`${item.name} ${item.distance}`}</li>
          )
        })}
      </ul>
    </div>
  )
}
