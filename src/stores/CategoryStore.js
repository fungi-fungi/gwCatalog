'use strict';
import { decode } from 'he';

import AppDispatcher from '../dispatchers/AppDispatcher';
import { NetworkConstants } from '../constants/Constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _category = {};
let _categories = [];

let setCategories = (categories) => {
  _categories = categories;
}

let setCategory = (category) => {
  _category = category;
}

class CategoryStoreClass extends EventEmitter {

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  getCategories() {
    return _categories;
  }

  getCategory() {
    return _category;
  }

}

const CategoryStore = new CategoryStoreClass();

CategoryStore.dispatchToken = AppDispatcher.register(action => {

  switch(action.actionType) {

    case NetworkConstants.RECIEVE_CATEGORIES_SUCCESS:
      setCategories(action.categories);
      CategoryStore.emitChange();
      break;

    case NetworkConstants.RECIEVE_CATEGORY_SUCCESS:
      setCategory(action.category);
      CategoryStore.emitChange();
      break;

    default:
  }

});

export default CategoryStore;
