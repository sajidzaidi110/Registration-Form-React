import axios from 'axios';
const baseUrl = 'https://staging.thequeno.com/api';

export async function apiService(method, uri, data, params) {
  let query = {
    method: method,
    url: uri ? baseUrl + uri : baseUrl,
  };

  if (params !== null) {
    query.params = params;
  }

  if (
    method === 'post' ||
    method === 'put' ||
    method === 'delete' ||
    method === 'patch'
  ) {
    query.data = data;
  }
  return axios(query);
}
