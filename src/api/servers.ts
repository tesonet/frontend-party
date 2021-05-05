import axios from 'axios'
import { getAuthToken } from 'libs/auth'
import { Server } from 'types/server'
import { URL } from '../config'

export const getServersFromApi = async (): Promise<Server[]> => {
  const token = getAuthToken()
  const { data } = await axios.get(`${URL}/servers`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })

  return data
}
