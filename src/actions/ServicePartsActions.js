'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher';
import { NetworkConstants } from '../constants/Constants';
import ClientAPI from '../utils/ClientAPI';

export default {

  toggleExpand: (id) => {
    AppDispatcher.dispatch({
      actionType: NetworkConstants.TOGGLE_EXPAND,
      servicePartProductId: id
    })
  },

  fetchProduct: (id) => {

    AppDispatcher.dispatch({
      actionType: NetworkConstants.RECIEVE_SERVICE_PART_PRODUCT,
      request_status: true
    })

    ClientAPI
      .sendGetRequest('/products/' + id )
      .then(product => {
        AppDispatcher.dispatch({
          actionType: NetworkConstants.RECIEVE_SERVICE_PART_PRODUCT_SUCCESS,
          id: id,
          product: product
        });
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType: NetworkConstants.RECIEVE_SERVICE_PART_PRODUCT_ERROR,
          message: message,
          request_status: false
        });
      });
  }
}
