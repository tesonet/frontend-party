
// All localstorage keys or persistent item for redux re-soaking
export const LAST_USER_API_KEY = 'LAST_USER_API_KEY';

// Sent to login API endpoint
export interface LoginRequest {
    username: string,
    password: string
}

export interface LoginResponse {
    token: string
}

export interface Server {
    name: string,
    distance: number
}