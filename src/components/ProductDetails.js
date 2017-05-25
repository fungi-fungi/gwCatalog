'use strict';

import React from 'react'
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import styles from '../styles/ProductDetails.css'

class ProductDetails extends React.Component {

  render() {

    const { product } = this.props;

    return (
      <Paper elevation={4} className={styles.padding}>
        <Typography type="headline" component="h3">
          { product.name }
        </Typography>
        <Typography type="body1" component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
    )
  }
}

export default ProductDetails;
