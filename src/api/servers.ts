import axios from 'axios'
import { Server } from 'types/server'
import { URL } from './index'

export const getServersFromApi = async (): Promise<Server[]> => {
  const { data } = await axios.get(`${URL}/servers`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'f9731b590611a5a9377fbd02f247fcdf',
    },
  })

  return data
}
