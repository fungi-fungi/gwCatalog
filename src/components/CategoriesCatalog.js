'use strict';

import React from 'react';

import CategoryActions from '../actions/CategoryActions';
import CategoryStore from '../stores/CategoryStore';

import CategoriesCatalogEntries from './CategoriesCatalogEntries';

class CategoriesCatalog extends React.Component {

  constructor(){
    super();

    this.state = {
      categories: []
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
      categories: CategoryStore.getCategories()
    });
  }

  componentDidMount(){
    CategoryActions.recieveCategories(this.props.params.id);
  }

  componentWillReceiveProps(nextProps){
    CategoryActions.recieveCategories(nextProps.params.id);
  }

  render() {

    const { categories } = this.state;

    return (
      <div>
        <CategoriesCatalogEntries categories={categories} />
      </div>
    );
  }
}

export default CategoriesCatalog;
