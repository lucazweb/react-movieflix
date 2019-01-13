import axios from 'axios';

export const apiKey = 'c14e1b60a5784ad2a912b4e46eb4780a';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

export default api;