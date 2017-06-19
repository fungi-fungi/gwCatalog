'use strict';

import React from 'react'

import Grid from 'material-ui/Grid';
import { LinearProgress } from 'material-ui/Progress';
import {CardContent } from 'material-ui/Card';

import ProductDetailsShort from './ProductDetailsShort'

class ProductDetailsWithLoader extends React.Component {

  render() {

    const { productDetails } = this.props;

    return (
      <div>
        { productDetails ? (
          <Grid container direction="row">
            <Grid item xs={1}></Grid>
            <Grid item xs={11}>
              <CardContent>
                <ProductDetailsShort product={ productDetails } />
              </CardContent>
            </Grid>
          </Grid>
        ) : (
          <LinearProgress />
        )
      }
      </div>

    )
  }
}

export default ProductDetailsWithLoader;
