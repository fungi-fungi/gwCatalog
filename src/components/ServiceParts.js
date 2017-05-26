'use strict';

import React from 'react';

import ServicePartsDetailsStore from '../stores/ServicePartsDetailsStore';
import ServicePartsActions from '../actions/ServicePartsActions';

import ServicePart from './ServicePart';

class ServiceParts extends React.Component {

  constructor() {
    super();

    this.state = {
      products: new Map()
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    ServicePartsDetailsStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    ServicePartsDetailsStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      products: ServicePartsDetailsStore.getProducts()
    });
  }

  onExpand = (id) => {
    ServicePartsActions.fetchProduct(id);
    ServicePartsActions.toggleExpand(id);
  }

  getProduct = (id) => {
    return this.state.products.get(id) || {};
  }

  render() {

    const { parts } = this.props;

    return (
      <div>
        { parts.map( (servicePart) => {
            return <ServicePart
              servicePart={ servicePart }
              product={ this.getProduct(servicePart.partNumber) }
              onExpand={ this.onExpand }
          />
        } )}
      </div>
    )
  }
}

export default ServiceParts;
