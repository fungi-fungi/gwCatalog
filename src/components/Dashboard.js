'use strict';

import React from 'react';

import ProductActions from '../actions/ProductActions';
import ProductStore from '../stores/ProductStore';

import ProductDetails from './ProductDetails';
import CircularProgressBar from './CircularProgressBar';

class Dashboard extends React.Component {

  constructor(){
    super();

    this.state = {
      product: {}
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
      product: ProductStore.getSelectedProduct2()
    });
  }

  componentDidMount(){
    ProductActions.recieveProduct(this.props.params.id);
  }

  render() {

    const { product } = this.state;

    return (
      <div>
        { product ? (
          <ProductDetails product={ product } />
        ) : (
          <CircularProgressBar />
        ) }
      </div>
    );
  }
}

export default Dashboard;
