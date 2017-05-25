'use strict';

import React from 'react';

import ServicePart from './ServicePart';

class ServiceParts extends React.Component {


  render() {

    const { parts } = this.props;

    return (
      <div>
        { parts.map( (servicePart) => {
            return <ServicePart servicePart={ servicePart } />
        } )}
      </div>
    )
  }
}

export default ServiceParts;
