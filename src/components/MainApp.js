'use strict';

import React from 'react'

import ProductStore from '../stores/ProductStore';
import ProductActions from '../actions/ProductActions';

import AppFrame from './AppFrame';
import ProductDetails from './ProductDetails'
import SearchBox from './SearchBox';

class MainApp extends React.Component {

  constructor() {
    super();

    this.state = {
      value: '',
      selectedProduct: { name: '' },
      suggestions: [],
      isSuggestionsLoading: false,
      isProductSelected: false
    };

    this.onChange = this.onChange.bind(this);
  }


  componentWillMount() {
    ProductStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    ProductStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      suggestions: ProductStore.getProducts(),
      selectedProduct: ProductStore.getSelectedProduct(),
      isProductSelected: ProductStore.getIsProductSelected(),
      isSuggestionsLoading: ProductStore.getIsSuggestionsLoading()
    });
  }

  onInputChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    ProductActions.recieveProducts(value);
  };

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    ProductActions.selectProduct(suggestion);
  }

  onSuggestionsClearRequested = () => {
    ProductActions.clearProducts();
  };

  render() {

    const { value, suggestions, selectedProduct, isSuggestionsLoading } = this.state;

    return (
      <AppFrame
        searchBar={ <SearchBox
          isLoading={ isSuggestionsLoading }
          value={ value }
          suggestions= { suggestions }
          onInputChange={ this.onInputChange }
          onSuggestionsFetchRequested={ this.onSuggestionsFetchRequested }
          onSuggestionSelected={ this.onSuggestionSelected }
          onSuggestionsClearRequested={ this.onSuggestionsClearRequested }
        /> }
        appDetails={ <ProductDetails
          product={ selectedProduct }
         /> }
       />

    );
  }
}

export default MainApp;
