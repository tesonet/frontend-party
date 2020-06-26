export type REQUEST_LOGIN = 'REQUEST_LOGIN'
export type LOGGED_IN = 'LOGGED_IN'
export type ERROR = 'ERROR'
export type LOG_OUT = 'LOG_OUT'

export interface AuthActions {
  type: REQUEST_LOGIN | LOGGED_IN | ERROR | LOG_OUT
  token?: string | null
  err?: Error | null
}
