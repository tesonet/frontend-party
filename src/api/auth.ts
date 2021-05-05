import axios from 'axios'
import { URL } from '../config'

export const loginWithCredentials = async (username: string, password: string): Promise<string> => {
  const { data } = await axios.post(`${URL}/tokens`, {
    username,
    password,
  })

  return data.token
}
