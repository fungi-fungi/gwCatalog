'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher';
import { NetworkConstants } from '../constants/Constants';
import ClientAPI from '../utils/ClientAPI';

export default {


  loadMoreResults: (searchPhrase, offsetSize) => {

    AppDispatcher.dispatch({
      actionType: NetworkConstants.RECIEVE_PRODUCTS_UPDATE,
      isLoading: true
    })

    ClientAPI
      .sendGetRequest('/products', {query: searchPhrase, offset: offsetSize} )
      .then(products => {
        AppDispatcher.dispatch({
          actionType: NetworkConstants.RECIEVE_PRODUCTS_UPDATE_SUCCESS,
          products: products.data,
          count: products.count,
          isLoading: false
        });
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType: NetworkConstants.RECIEVE_PRODUCTS_UPDATE_ERROR,
          message: message,
          isLoading: false
        });
      });
  },

  startSearch: (searchPhrase) => {

    if (searchPhrase.length > 3) {
      AppDispatcher.dispatch({
        actionType: NetworkConstants.RECIEVE_PRODUCTS,
        isLoading: true
      })

      ClientAPI
        .sendGetRequest('/products', {query: searchPhrase, offset: 0} )
        .then(products => {
          AppDispatcher.dispatch({
            actionType: NetworkConstants.RECIEVE_PRODUCTS_SUCCESS,
            products: products.data,
            count: products.count,
            isLoading: false
          });
        })
        .catch(message => {
          AppDispatcher.dispatch({
            actionType: NetworkConstants.RECIEVE_PRODUCTS_ERROR,
            message: message,
            isLoading: false
          });
        });
    } else {
      AppDispatcher.dispatch({
        actionType: NetworkConstants.CLEAR_PRODUCTS,
        isLoading: false
      })
    }
  },

  selectProduct: (product) => {
    AppDispatcher.dispatch({
      actionType: NetworkConstants.SELECT_PRODUCT,
      product: product
    })
  },

  hideLoading: () => {
    AppDispatcher.dispatch({
      actionType: NetworkConstants.HIDE_LOADING,
      isLoading: false
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
      isLoading: true
    })

    ClientAPI
      .sendGetRequest('/products', {query: query} )
      .then(products => {
        AppDispatcher.dispatch({
          actionType: NetworkConstants.RECIEVE_PRODUCTS_SUCCESS,
          products: products.data,
          count: products.count,
          isLoading: false
        });
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType: NetworkConstants.RECIEVE_PRODUCTS_ERROR,
          message: message,
          isLoading: false
        });
      });
  }
}
