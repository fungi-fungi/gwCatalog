'use strict';

import React from 'react'

import ProductStore from '../stores/ProductStore';

import DetailsDialog from './DetailsDialog'

class Details extends React.Component {

  constructor() {
    super();

    this.state = {
      selectedProduct: {}
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
      selectedProduct: ProductStore.getSelectedProduct1()
    });
  }

  render() {

    const { selectedProduct } = this.state;

    return (
      <div></div>
    );
  }
}

export default Details;
