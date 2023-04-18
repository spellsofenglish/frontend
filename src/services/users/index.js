/**
 * @prettier
 */

import { api, debug } from '../index';
import { HTTP_STATUS, URL } from '../config';

export default class UsersService {
  static API_ENDPOINTS = {
    registration: '/auth/registration',
    authorization: '/auth/login',
    changePassword: '/auth/updatePassword',
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
  //credentials
  static async authorization(data) {
    try {
      const request = await api.post(`${URL}${this.API_ENDPOINTS.authorization}`, {
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      debug.success('The result of authorization', request);

      if (request.status !== HTTP_STATUS.SUCCESS) {
        return Promise.reject(`Incorrect status ${request.status}`);
      }

      const requestData = await request.json();

      console.log(requestData);

      return requestData;
    } catch (error) {
      debug.error(
        `GET request was failed with path: ${URL}${this.API_ENDPOINTS.authorization}`,
        error,
      );
      throw await error.response?.json();
    }
  }

  static async changePassword(data) {
    try {
      const request = await api.post(`${URL}${this.API_ENDPOINTS.changePassword}`, {
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      debug.success('The result of changing a password', request);

      if (request.status !== HTTP_STATUS.SUCCESS) {
        return Promise.reject(`Incorrect status ${request.status}`);
      }
    } catch (error) {
      debug.error(
        `GET request was failed with path: ${URL}${this.API_ENDPOINTS.changePassword}`,
        error,
      );
      throw await error.response?.json();
    }
  }
}
