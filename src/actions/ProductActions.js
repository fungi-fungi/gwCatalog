'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher';
import { NetworkConstants } from '../constants/Constants';
import ClientAPI from '../utils/ClientAPI';

export default {

  selectProduct: (product) => {
    AppDispatcher.dispatch({
      actionType: NetworkConstants.SELECT_PRODUCT,
      product: product
    })
  },

  clearProducts: () => {
    AppDispatcher.dispatch({
      actionType: NetworkConstants.CLEAR_PRODUCTS
    })
  },

  recieveProducts: (query) => {

    AppDispatcher.dispatch({
      actionType: NetworkConstants.RECIEVE_PRODUCTS,
      request_status: true
    })

    ClientAPI
      .sendGetRequest('/products', {id: query} )
      .then(products => {
        AppDispatcher.dispatch({
          actionType: NetworkConstants.RECIEVE_PRODUCTS_SUCCESS,
          products: products
        });
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType: NetworkConstants.RECIEVE_PRODUCTS_ERROR,
          message: message,
          request_status: false
        });
      });
  }
}
