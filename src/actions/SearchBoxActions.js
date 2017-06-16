'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher';
import { NetworkConstants } from '../constants/Constants';
import ClientAPI from '../utils/ClientAPI';

export default {

  setSearchPhrase: (searchPhrase) => {
    AppDispatcher.dispatch({
      actionType: NetworkConstants.RECIVE_INPUT,
      searchPhrase: searchPhrase
    })
  }
}
