'use strict';

import React from 'react'
import Infinite from 'react-infinite';

import { AuthWrapper } from './AuthWrapper';

import CircularProgressBar from './CircularProgressBar';
import ResultsCouter from './ResultsCouter';
import NoMoreResults from './NoMoreResults';

import ProductSearchResult from './ProductSearchResult';
import ProductStore from '../stores/ProductStore';
import ProductActions from '../actions/ProductActions';

class SearchResults extends React.Component {

  constructor() {
    super();

    this.state = {
      searchPhrase: '',
      products: [],
      isLoading: false,
      isLoadingMore: false,
      totalAmount: 0
    }

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
      products: ProductStore.getProducts(),
      isLoading: ProductStore.getIsSuggestionsLoading(),
      isLoadingMore: ProductStore.getIsLoadingMore(),
      searchPhrase: ProductStore.getSearchPhrase(),
      totalAmount: ProductStore.getProductsCount(),
      isAllLoaded: ProductStore.getIsAllLoaded()
    });
  }

  handleInfiniteLoad = () => {
    if (this.state.products.length < this.state.totalAmount) {
      ProductActions.loadMoreResults(this.state.searchPhrase, this.state.products.length);
    } else {
      ProductActions.hideLoading();
    }
  }

  elementInfiniteLoad = () => {
    return <CircularProgressBar />
  }

  render() {

    const { products, isLoadingMore, totalAmount, isAllLoaded } = this.state;

    return (
      <div>
        <ResultsCouter totalAmount={totalAmount} />
        <Infinite
          useWindowAsScrollContainer
          elementHeight={150}
          infiniteLoadBeginEdgeOffset={200}
          onInfiniteLoad={this.handleInfiniteLoad}
          loadingSpinnerDelegate={this.elementInfiniteLoad()}
          isInfiniteLoading={isLoadingMore}
          >
          {products.map((product) => {
            return <ProductSearchResult parent={product.id} key={product._id} product={product}/>;
          })}
        </Infinite>
        <NoMoreResults isAllLoaded={isAllLoaded } />
      </div>
    );
  }
}

export default AuthWrapper(SearchResults);
