'use strict';

import React from 'react';

import ProductStore from '../stores/ProductStore';
import ServicePartsActions from '../actions/ServicePartsActions';

import ServicePart from './ServicePart';

class ServiceParts extends React.Component {

  constructor() {
    super();

    this.state = {
      products: new Map()
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
      products: ProductStore.getProductsDetailsList()
    });
  }

  onExpand = (id) => {
    if (!this.state.products.has(id)) {
      ServicePartsActions.fetchProduct(id);
    }
  }

  getTestData = (id) => {
    return this.state.products.get(id);
  }

  render() {

    const { parts } = this.props;

    return (
      <div>
        { parts.map( (servicePart) => {
            return <ServicePart
              servicePart={ servicePart }
              onExpand={ this.onExpand }
              productDetails={ this.getTestData(servicePart.partNumber) }
          />
        } )}
      </div>
    )
  }
}

export default ServiceParts;
