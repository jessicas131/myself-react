import tokenService from './tokenService'
const BASE_URL = '/api/items';

export function getAll() {
  return fetch(BASE_URL, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
  }).then(res => res.json());
}

export function create(item) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(item)
  }).then(res => res.json());
}

export function update(item) {
  return fetch(`${BASE_URL}/${item._id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(item)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
  }).then(res => res.json());
}

export function getOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
  }).then(res => res.json());
}