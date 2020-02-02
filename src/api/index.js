import Client from './client'
import Auth from './services/auth'
import Servers from './services/servers'

export const http = new Client()

export const auth = new Auth(http, process.env.REACT_APP_API_URL)
export const servers = new Servers(http, process.env.REACT_APP_API_URL)
