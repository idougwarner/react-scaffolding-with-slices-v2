import axios from 'axios';
import { API_URL, REQUEST_HEADERS } from '../constants/api';
import { IRequestBody } from './service.types';

export const postRequest = (url: string, body?: IRequestBody) => {
  return axios.post(API_URL + url, body, { headers: REQUEST_HEADERS });
};

export const getRequest = (url: string) => {
  return axios.get(API_URL + url, { headers: REQUEST_HEADERS });
};
