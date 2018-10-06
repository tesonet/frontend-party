import { API_URL } from './constants'

export function Login(userData) {
    
    let url = `${API_URL}tokens`;

    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: { "Content-Type": "application/json" }
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