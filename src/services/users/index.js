/**
 * @prettier
 */

import { api, debug } from '../index';
import { HTTP_STATUS, URL } from '../config';

export default class UsersService {
  static API_ENDPOINTS = {
    registration: '/auth/registration',
  };

  static async register(data) {
    console.log(data);
    try {
      console.log(JSON.stringify(data));
      const request = await api.post(`${URL}${this.API_ENDPOINTS.registration}`, {
        headers: {
          'content-type': 'application/json',
          //   // 'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
        body: JSON.stringify(data),
        //method: 'no-cors',
      });

      console.log(1);

      debug.success('The result of creating a new user', request);

      if (request.status !== HTTP_STATUS.SUCCESS) {
        return Promise.reject(`Incorrect status ${request.status}`);
      }

      return request.json();
    } catch (error) {
      debug.error(
        `GET request was failed with path: ${URL}${this.API_ENDPOINTS.registration}`,
        error,
      );
      throw await error.response?.json();
    }
  }
}
