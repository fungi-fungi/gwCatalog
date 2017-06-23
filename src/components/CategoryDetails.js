'use strict';

import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import CategoryActions from '../actions/CategoryActions';
import CategoryStore from '../stores/CategoryStore';

import Tabs, { Tab } from 'material-ui/Tabs';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import ProductSearchResult from './ProductSearchResult'

class CategoryDetails extends React.Component {

  constructor(){
    super();

    this.state = {
      category: { parts: [], rentals: [], services: []},
      index: 0
    }
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    CategoryStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    CategoryStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      category: CategoryStore.getCategory()
    });
  }

  componentDidMount(){
    CategoryActions.recieveCategory(this.props.params.id);
  }

  handleChange = (event, index) => {
    this.setState({ index });
  };

  handleChangeIndex = index => {
    this.setState({ index });
  };

  render() {

    const { category } = this.state;

    return (
      <div>
        <Grid container direction="column">
          <Grid item >
            <Typography>
              {category.name}
            </Typography>
          </Grid>
          <Grid item >
          <Typography>
            {category.link}
          </Typography>
          </Grid>
          <Grid item >
            <Tabs index={this.state.index} onChange={this.handleChange} >
              <Tab label="Parts" />
              <Tab label="Rentals" />
              <Tab label="Serices" />
            </Tabs>
            <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
              <div>
                {category.parts.map( (product) => {
                  return <ProductSearchResult parent={product.id} key={product._id} product={product}/>
                })}
              </div>
              <div>
                {category.rentals.map( (product) => {
                  return <ProductSearchResult parent={product.id} key={product._id} product={product}/>
                })}
              </div>
              <div>
                {category.services.map( (product) => {
                  return <ProductSearchResult parent={product.id} key={product._id} product={product}/>
                })}
              </div>
            </SwipeableViews>
          </Grid>
        </Grid>
      </div>
    );

  }
}

export default CategoryDetails;
