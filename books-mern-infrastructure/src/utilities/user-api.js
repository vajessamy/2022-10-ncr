// const BASE_URL = '/api/users';
// export async function signUp(userData){
//     const response = await fetch(BASE_URL, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(userData)
//     })
//     if(response.ok) {
//         return response.json();
//     }else {
//         throw new Error('Invalid Signup!')
//     }
//     }

import { getToken } from './users-service';
const BASE_URL = '/api/users';


export async function login(userData) {
  const response = await fetch(BASE_URL + '/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });

  if (response.ok) {
    return response.json()
  } else {
    throw new Error('Invalid Login!')
  }
}

export async function signUp(userData) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Invalid Signup!')
  }
}

export async function sendRequest(url, method = 'GET', payload = null) {
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload)
  }

  const token = getToken();
  if (token) {
    options.headers = options.headers || {};
    options.headers.Authorization = token;
  }

  const response = await fetch(url, options);

  if (response.ok) return response.json();
  throw new Error('Bad Request!');
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}
