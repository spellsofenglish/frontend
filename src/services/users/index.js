/**
 * @prettier
 */

import { api, debug } from '../index';
import { HTTP_STATUS, URL } from '../config';

export default class UsersService {
  static API_ENDPOINTS = {
    registration: '/auth/registration',
    authorization: '/auth/login',
    recovery: '/auth/recoveryPass',
    resetPassword: '/auth/changePassword',
    signout: '/auth/signout',
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
      const request = await api.post(`${URL}${this.API_ENDPOINTS.recovery}`, {
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      debug.success('The result of password recovery', request);

      if (request.status !== HTTP_STATUS.SUCCESS) {
        return Promise.reject(`Incorrect status ${request.status}`);
      }
    } catch (error) {
      debug.error(`GET request was failed with path: ${URL}${this.API_ENDPOINTS.recovery}`, error);
      throw await error.response?.json();
    }
  }

  static async resetPassword(data) {
    try {
      const request = await api.post(`${URL}${this.API_ENDPOINTS.resetPassword}`, {
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      debug.success('The result of changing password', request);

      if (request.status !== HTTP_STATUS.SUCCESS) {
        return Promise.reject(`Incorrect status ${request.status}`);
      }
    } catch (error) {
      debug.error(`GET request was failed with path: ${URL}${this.API_ENDPOINTS.recovery}`, error);
      throw await error.response?.json();
    }
  }

  static async signout(data) {
    try {
      const request = await api.post(`${URL}${this.API_ENDPOINTS.signout}`, {
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      debug.success('The result of logging out', request);

      if (request.status !== HTTP_STATUS.SUCCESS) {
        return Promise.reject(`Incorrect status ${request.status}`);
      }

      //redux
    } catch (error) {
      debug.error(`POST request was failed with path: ${URL}${this.API_ENDPOINTS.signout}`, error);
      throw await error.response?.json();
    }
  }
}
