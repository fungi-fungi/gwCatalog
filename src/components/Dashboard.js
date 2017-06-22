'use strict';

import React from 'react';

import Grid from 'material-ui/Grid';

import ProductActions from '../actions/ProductActions';
import ProductStore from '../stores/ProductStore';

import ProductDetails from './ProductDetails';
import CircularProgressBar from './CircularProgressBar';

import styles from '../styles/Dashbord.css';

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
      <div className={styles.main}>
        <Grid container>
          <Grid item xs={0} sm={3} />
          <Grid item xs={12} sm={6}>
            { product ? (
              <ProductDetails product={ product } />
            ) : (
              <CircularProgressBar />
            ) }

          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
