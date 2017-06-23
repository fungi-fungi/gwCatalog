'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher';
import { NetworkConstants } from '../constants/Constants';
import ClientAPI from '../utils/ClientAPI';

export default {

  recieveCategories: (categoryId) => {

    AppDispatcher.dispatch({
      actionType: NetworkConstants.RECIEVE_CATEGORIES,
      isLoading: true
    })

    ClientAPI
      .sendGetRequest('/categories/' + categoryId + '/children', {} )
      .then(categories => {
        AppDispatcher.dispatch({
          actionType: NetworkConstants.RECIEVE_CATEGORIES_SUCCESS,
          categories: categories,
          isLoading: false
        });
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType: NetworkConstants.RECIEVE_CATEGORIES_ERROR,
          message: message,
          isLoading: false
        });
      });
  },

  recieveCategory: (categoryId) => {

    AppDispatcher.dispatch({
      actionType: NetworkConstants.RECIEVE_CATEGORY,
      isLoading: true
    })

    ClientAPI
      .sendGetRequest('/categories/' + categoryId, {} )
      .then(category => {
        AppDispatcher.dispatch({
          actionType: NetworkConstants.RECIEVE_CATEGORY_SUCCESS,
          category: category,
          isLoading: false
        });
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType: NetworkConstants.RECIEVE_CATEGORY_ERROR,
          message: message,
          isLoading: false
        });
      });
  }
}
