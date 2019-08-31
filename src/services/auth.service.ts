import {localStorageKey} from "../constants/auth.constants";

function login(username: string, password: string): Promise<boolean> {
    return new Promise<boolean>(resolve => fetch('http://playground.tesonet.lt/v1/tokens', {
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
                        localStorage.setItem(localStorageKey, data.token);
                        resolve(true);
                    } else if (data.message) {
                        resolve(false);
                    }
                }
                resolve(false);
            })
    );
}

export const userService = {
    login
};
