'use strict';
import AppDispatcher from '../dispatchers/AppDispatcher';
import { NetworkConstants } from '../constants/Constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _products = new Map();

function addProducts(id, product) {
  _products.set(id, product);
}

class ServicePartsDetailsStoreClass extends EventEmitter {

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  getProduct(id) {
    return _products.get(id) || {};
  }

  getProducts() {
    return _products;
  }

}

const ServicePartsDetailsStore = new ServicePartsDetailsStoreClass();

ServicePartsDetailsStore.dispatchToken = AppDispatcher.register(action => {

  switch(action.actionType) {

    case NetworkConstants.RECIEVE_SERVICE_PART_PRODUCT_SUCCESS:
      addProducts(action.id, action.product);
      ServicePartsDetailsStore.emitChange();
      break;

    default:
  }

});

export default ServicePartsDetailsStore;
