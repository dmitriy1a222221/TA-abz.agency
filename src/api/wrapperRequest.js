import axios from 'axios';

const previousRequests = {};
const apiURL = `https://frontend-test-assignment-api.abz.agency/api/v1`;

const headers = {
    'Content-Type': 'application/json',
    'Token': localStorage.getItem('token')
};

export class WrapperRequest {
  post = (url, params = {}, cancelPrevious = false) => WrapperRequest.makeRequest('post', url, params, cancelPrevious);

  patch = (url, params = {}, cancelPrevious = false) => WrapperRequest.makeRequest('patch', url, params, cancelPrevious);

  get = (url, params = {}, cancelPrevious = false) => WrapperRequest.makeRequest('get', url, params, cancelPrevious);

  delete = (url, params = {}, cancelPrevious = false) => WrapperRequest.makeRequest('delete', url, params, cancelPrevious);

  static makeRequest(method, url, parameters, cancelPrevious) {
    if (cancelPrevious && previousRequests[url]) {
      previousRequests[url].cancel();
    }
    let data = {};
    let params = {};
    if (method === 'post') {
      data = parameters;
    } else if (method === 'get' || method === 'patch') {
      params = parameters;
    }

    const instance = axios.create({ apiURL });

    const config = {
      method,
      baseURL: apiURL,
      url,
      headers,
      data,
      params
    };

    return instance.request(config);
  }
}