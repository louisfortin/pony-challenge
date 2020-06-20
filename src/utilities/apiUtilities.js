import axios from 'axios';

const marvelApiUrl = 'http://gateway.marvel.com';
export const marvelApiKey = 'fc7547894713ddd6762983c52fdc29d2';

export const getQueryParams = (params) => {
  let rep = '';
  if (params.limit) rep += `&limit=${params.limit}`;
  if (params.offset) rep += `&offset=${params.offset}`;
  if (params.start) rep += `&nameStartsWith=${params.start}`;
  return rep;
} 

const api = axios.create({
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
