import { config } from '../config'
// import Log from './/Log'

import jwt from 'jsonwebtoken'

export const setAuthToken = (authToken: string): void => {
  localStorage.setItem(config.authKey, authToken)
}

export const getAuthToken = (): string | null => localStorage.getItem(config.authKey)

export const deleteAuthToken = (): void => {
  localStorage.removeItem(config.authKey)
}

export const cleanLocalStorageData = (): void => {
  deleteAuthToken()
  const keys = [config.authKey]
  keys.forEach(key => {
    localStorage.removeItem(key)
  })
}

export const checkToken = (token: string): boolean => {
  let valid = false

  try {
    const data = jwt.decode(token)
    // valid = !!(data && Date.now() / 1000 < data.exp)
    valid = true
  } catch (e) {
    console.error(e)
  }
  return valid
}

export const isAuthenticated = (): boolean => {
  const token = getAuthToken()
  if (token && checkToken(token)) {
    return true
  }
  cleanLocalStorageData()
  return false
}
