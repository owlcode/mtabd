import { authHeader } from '../_helpers';
import {settings} from '../settings';

export const userService = {
    login,
    logout,
    getAll
};

function login(username, password) {
    return Promise.resolve({
        name: 'TestUsername',
        username: 'TestUsername'
    })
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('/users', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }

    return response.json();
}