'use strict';
import { decode } from 'he';

import AppDispatcher from '../dispatchers/AppDispatcher';
import { NetworkConstants } from '../constants/Constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _searchPhrase = '';
let _selectedProduct = {};
let _products = [];
let _productsCount = 0;
let _isProductSelected = false;
let _product = { name: '' };
let _isSuggestionsLoading = false;
let _isLoadingMore = false;
let _isAutoSuggest = true;
let _productsDetails = new Map();

function setSearchPhrase(searchPhrase) {
  _searchPhrase = searchPhrase;
}

function insertMoreProducts(products) {
  _products = [].concat(_products, products);
}

function setSelectedProduct(product) {
  _selectedProduct = Object.assign(product, {
    title: product.id + '  ' + product.name,
    description: product.description,
    localPath: 'https://s3.us-east-2.amazonaws.com/gw-catalog/images/' + product.fullPath.split('/').slice(-1)[0].replace('-2.', '.')
  });
}

function setProducts(products) {
  _products = products;
}

function setProduct(product) {
  _product = product;
  _product.serviceParts.map( (servicePart) => {
      return Object.assign(servicePart, {isExpanded: false});
  })
}

function addDownloadedProduct(product) {
  _productsDetails.set(product.id, product);
}

function setProductsCount(count) {
  _productsCount = count;
}

function setSuggestionsLoadingStatus(status) {
  _isSuggestionsLoading = status;
}

function setIsLoadingMoreStatus(status) {
  _isLoadingMore = status;
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

  getSearchPhrase() {
    return _searchPhrase;
  }

  getProducts() {
    return _products.map( (product) => {
       return Object.assign(product, {
         title: product.id + '  ' + product.name,
         description: product.description,
         localPath: 'https://s3.us-east-2.amazonaws.com/gw-catalog/images/' + product.fullPath.split('/').slice(-1)[0].replace('-2.', '.')
       })
    });
  }

  getProductsInStore() {
    return _products.length;
  }

  getProductsCount() {
    return _productsCount;
  }

  getSuggestions() {
    return _products;
  }

  getSelectedProduct() {
    return _product;
  }

  getSelectedProduct1() {
    return _products[1];
  }

  getSelectedProduct2() {
    return _selectedProduct;
  }

  getIsProductSelected() {
    return _isProductSelected;
  }

  getIsSuggestionsLoading() {
    return _isSuggestionsLoading;
  }

  getIsLoadingMore() {
    return _isLoadingMore;
  }

  isAutoSuggest() {
    return _isAutoSuggest;
  }

  getIsAllLoaded() {
    return _products.length == _productsCount || _productsCount != 0;
  }

  getProductsDetailsList() {
    return _productsDetails;
  }

}

const ProductStore = new ProductStoreClass();

ProductStore.dispatchToken = AppDispatcher.register(action => {

  switch(action.actionType) {

    case NetworkConstants.RECIVE_INPUT:
      setSearchPhrase(action.searchPhrase);
      ProductStore.emitChange();
      break;

    case NetworkConstants.RECIEVE_PRODUCTS:
      setSuggestionsLoadingStatus(action.isLoading);
      ProductStore.emitChange();
      break;

    case NetworkConstants.RECIEVE_PRODUCT_SUCCESS:
      setSelectedProduct(action.product);
      ProductStore.emitChange();
      break;

    case NetworkConstants.RECIEVE_PRODUCTS_ERROR:
      setSuggestionsLoadingStatus(action.isLoading);
      ProductStore.emitChange();
      break;

    case NetworkConstants.RECIEVE_PRODUCTS_SUCCESS:
      setProducts(action.products);
      setProductsCount(action.count)
      setSuggestionsLoadingStatus(action.isLoading);
      ProductStore.emitChange();
      break;

    case NetworkConstants.RECIEVE_PRODUCTS_UPDATE:
      setIsLoadingMoreStatus(action.isLoading);
      ProductStore.emitChange();
      break;

    case NetworkConstants.RECIEVE_PRODUCTS_UPDATE_ERROR:
      setIsLoadingMoreStatus(action.isLoading);
      ProductStore.emitChange();
      break;

    case NetworkConstants.RECIEVE_PRODUCTS_UPDATE_SUCCESS:
      insertMoreProducts(action.products);
      setProductsCount(action.count)
      setIsLoadingMoreStatus(action.isLoading);
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

    case NetworkConstants.HIDE_LOADING:
      setSuggestionsLoadingStatus(action.isLoading);
      ProductStore.emitChange();
      break;

    case NetworkConstants.TOGLE_AUTOSUGGEST:
      ProductStore.emitChange();
      break;

    case NetworkConstants.RECIEVE_SERVICE_PART_PRODUCT_SUCCESS:
      addDownloadedProduct(action.product);
      ProductStore.emitChange();
      break;

    default:
  }

});

export default ProductStore;
