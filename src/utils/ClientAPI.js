'use strict';

import request from 'superagent/lib/client';
import LoginStore from '../stores/LoginStore'

const basePath = process.env.BASE_PATH;

console.log(basePath);
console.log(process.env.BASE_PATH);

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
