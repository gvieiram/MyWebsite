import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gh-pinned-repos.egoist.sh/',
});

export default api;
