import axios from 'axios';

const marvelApiUrl = 'http://gateway.marvel.com';
export const marvelApiKey = 'fc7547894713ddd6762983c52fdc29d2';

export const api = axios.create({
	baseURL: marvelApiUrl
});

const getHeaders = (config) => ({
  ...config.headers,
  'Accept': 'application/json'
});

export const get = (config) => api({
  method: 'GET',
  ...config,
  headers: getHeaders(config)
});

export default { get };
