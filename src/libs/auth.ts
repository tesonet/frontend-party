import { config } from '../config'

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

export const isAuthenticated = (): boolean => {
  const token = getAuthToken()
  if (token) {
    return true
  }
  cleanLocalStorageData()
  return false
}
