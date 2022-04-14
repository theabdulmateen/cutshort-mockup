import axios from 'axios';

import { isBrowser } from '@/constants/index';

export const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    authorization: isBrowser ? `Bearer ${localStorage.getItem('access')}` : '',
  },
});

export const publicApi = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
