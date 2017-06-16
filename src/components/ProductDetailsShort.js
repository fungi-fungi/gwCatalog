'use strict';

import React from 'react'

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import ServiceParts from './ServiceParts'

import styles from '../styles/ProductDetails.css'

function createMarkup(html) {
  return { __html: html };
}

class ProductDetailsShort extends React.Component {

  render() {

    const { product, level, parent } = this.props;

    return (

      <Paper elevation={4} className={styles.padding}>
        <Grid container>

          <Grid item xs={12} lg={12}>
              <Grid container gutter={24} direction="column">
                <Grid item>
                  <Grid container>
                    <Grid item md={8} xs={8}>
                      { product.description }
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <table dangerouslySetInnerHTML={ createMarkup(product.properties) } />
                </Grid>

                <Grid item>
                  <ServiceParts parent={ parent } parts={ product.serviceParts || [] } level={ level } />
                </Grid>

              </Grid>

          </Grid>

        </Grid>
      </Paper>
    )
  }
}

export default ProductDetailsShort;
