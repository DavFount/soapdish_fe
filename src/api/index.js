import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.thesoapdish.app/v1/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
