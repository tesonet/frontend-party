import axios from 'axios'
import { config } from '../config'

export const loginWithCredentials = async (username: string, password: string): Promise<string> => {
  const { data } = await axios.post(`${config.url}/tokens`, {
    username,
    password,
  })

  return data.token
}
