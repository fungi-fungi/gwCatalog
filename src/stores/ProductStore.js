'use strict';
import { decode } from 'he';

import AppDispatcher from '../dispatchers/AppDispatcher';
import { NetworkConstants } from '../constants/Constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _products = [];

function setProducts(products) {
  _products = products;
}

class ProductStoreClass extends EventEmitter {

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  getProducts() {
    return _products.map( (product) => {
       return Object.assign(product, {
         title: decode(product.id + '  ' + product.name)
       })
    });
  }

  getSuggestions() {
    return _products;//_products.map( (product) => { return product.id + '  ' + product.name })
  }

}

const ProductStore = new ProductStoreClass();

ProductStore.dispatchToken = AppDispatcher.register(action => {

  switch(action.actionType) {

    case NetworkConstants.RECIEVE_PRODUCTS_SUCCESS:
      setProducts(action.products);
      ProductStore.emitChange();
      break

    default:
  }

});

export default ProductStore;
