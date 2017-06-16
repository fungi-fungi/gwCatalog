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

  onExpand = (id, level, parent) => {
    ServicePartsActions.fetchProduct(id);
    ServicePartsActions.toggleExpand(id, level, parent);
  }

  getProduct = (id) => {
    return this.state.products.get(id) || {};
  }

  render() {

    const { parts, level, parent } = this.props;

    return (
      <div>
        { parts.map( (servicePart) => {
            return <ServicePart
              servicePart={ servicePart }
              product={ servicePart.product || {name: ''} }
              onExpand={ this.onExpand }
              level={ level + 1 }
              parent={ parent }
          />
        } )}
      </div>
    )
  }
}

export default ServiceParts;
