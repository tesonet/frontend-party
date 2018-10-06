import { API_URL } from './constants'

export function GetServers(token) {

    let url = `${API_URL}servers`;

    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        }).then(response => {
            if (response.ok) {
                resolve(response.json())
            } else {
                reject(new Error('Invalid username or password'))
            }
        }, () => {
            reject(new Error('Invalid username or password'))
        })
    })
}