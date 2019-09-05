import Cookies from 'universal-cookie';

const cookies = new Cookies();
const urlBase = 'http://playground.tesonet.lt/v1';

export const getServersAsync = async() => {
    const response = await fetch(`${urlBase}/servers`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${cookies.get('token')}`
        }
    })

    return await handleResponseAsync(response);
}

export const getLoginTokenAsync = async ({username, password}) => {
    const response = await fetch(`${urlBase}/tokens`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })

    return await handleResponseAsync(response);
}

const handleResponseAsync = async response => {
    const responseBody = await response.json();

    if (!response.ok) {
        throw Error(responseBody.message);
    }

    return responseBody;
}