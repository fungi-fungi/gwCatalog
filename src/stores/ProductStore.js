'use strict';
import { decode } from 'he';

import AppDispatcher from '../dispatchers/AppDispatcher';
import { NetworkConstants } from '../constants/Constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _products = [];
let _isProductSelected = false;
let _product = { name: '' };

function setProducts(products) {
  _products = products;
}

function setProduct(product) {
  _product = product;
}

function setProductStatus(status) {
  _isProductSelected = status;
}

function clearProducts() {
  _products = [];
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
         title: decode(product.id + '  ' + product.name),
         description: decode(product.description),
         localPath: "https://s3.us-east-2.amazonaws.com/gw-catalog/images/" + product.fullPath.split('/').slice(-1)[0].replace('-2.', '.')
       })
    });
  }

  getSuggestions() {
    return _products;
  }

  getSelectedProduct() {
    return _product;
  }

  getIsProductSelected() {
    return _isProductSelected;
  }

}

const ProductStore = new ProductStoreClass();

ProductStore.dispatchToken = AppDispatcher.register(action => {

  switch(action.actionType) {

    case NetworkConstants.RECIEVE_PRODUCTS_SUCCESS:
      setProducts(action.products);
      ProductStore.emitChange();
      break;

    case NetworkConstants.SELECT_PRODUCT:
      setProduct(action.product);
      ProductStore.emitChange();
      break;

    case NetworkConstants.CLEAR_PRODUCTS:
      clearProducts();
      ProductStore.emitChange();
      break;

    default:
  }

});

export default ProductStore;
