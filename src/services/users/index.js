/**
 * @prettier
 */

import { api, debug } from '../index';
import { HTTP_STATUS, URL } from '../config';

export default class UsersService {
  static API_ENDPOINTS = {
    registration: '/auth/registration',
    login: '/auth/login',
  };

  static async register(data) {
    try {
      const request = await api.post(`${URL}${this.API_ENDPOINTS.registration}`, {
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      debug.success('The result of creating a new user', request);

      if (request.status !== HTTP_STATUS.SUCCESS) {
        return Promise.reject(`Incorrect status ${request.status}`);
      }
    } catch (error) {
      debug.error(
        `GET request was failed with path: ${URL}${this.API_ENDPOINTS.registration}`,
        error,
      );
      throw await error.response?.json();
    }
  }

  static async login(data) {
    try {
      const request = await api.post(`${URL}${this.API_ENDPOINTS.login}`, {
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      debug.success('The result of creating a new user', request);

      if (request.status !== HTTP_STATUS.SUCCESS) {
        return Promise.reject(`Incorrect status ${request.status}`);
      }

      const requestData = await request.json();

      console.log(requestData);

      return requestData;
    } catch (error) {
      debug.error(`GET request was failed with path: ${URL}${this.API_ENDPOINTS.login}`, error);
      throw await error.response?.json();
    }
  }
}
