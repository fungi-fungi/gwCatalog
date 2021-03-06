'use strict';

import request from 'superagent/lib/client';
import LoginStore from '../stores/LoginStore'

const basePath = 'http://localhost:8080/api';

export default {

  sendGetRequest: (url, query = {}) => {
    return new Promise((resolve, reject) => {
      request
        .get(basePath + url)
        .query(query)
        // .set('Authorization', 'Bearer ' + LoginStore.getJwt())
        .end((err, response) => {
          if (err) reject(err);
          resolve(JSON.parse(response.text));
        })
    });
  }

}
