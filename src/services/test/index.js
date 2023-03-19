/**
 * @prettier
 */

import { api, debug } from '../index';
import { HTTP_STATUS, URL } from '../config';

export default class ChurchesService {
  static API_ENDPOINTS = {
    churches: 'Churchs',
  };

  static async get() {
    try {
      const request = await api.get(
        `${URL}${this.API_ENDPOINTS.churches}/?lat=40.73061&long=-73.935242&pg=2`,
        {
          headers: {
            'content-type': 'application/json',
          },
        },
      );

      debug.success('The result of getting a list of churches', request);

      if (request.status !== HTTP_STATUS.SUCCESS) {
        return Promise.reject(`Incorrect status ${request.status}`);
      }

      return request.json();
    } catch (error) {
      debug.error(
        `GET request was failed with path: ${URL}${this.API_ENDPOINTS.churches}/?lat=40.73061&long=-73.935242&pg=2`,
        error,
      );
      throw await error.response?.json();
    }
  }
}
