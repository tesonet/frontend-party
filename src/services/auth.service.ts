import {LOCAL_STORAGE_TOKEN_KEY} from "../constants/auth.constants";

function login(username: string, password: string): Promise<boolean> {
    return new Promise<boolean>(resolve => fetch(`${process.env.REACT_APP_API_URL}tokens`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then(res => res.json())
            .then(data => {
                if (data) {
                    // Successful login
                    if (data.token) {
                        localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, data.token);
                        resolve(true);
                    } else if (data.message) {
                        resolve(false);
                    }
                }
                resolve(false);
            })
    );
}

function logout(): Promise<void> {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
    if (token) {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    }
    return new Promise<void>(resolve => resolve());
}

export const authService = {
    login,
    logout
};
