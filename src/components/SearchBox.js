'use strict';

import React from 'react';

import Autosuggest from 'react-autosuggest';
import SearchIcon from 'material-ui-icons/Search';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';

import ProductStore from '../stores/ProductStore';
import ProductActions from '../actions/ProductActions';

import styles from '../styles/SearchBox.css'

/**
 * SearchBox component
 */

 const getSuggestionValue = suggestion => suggestion.title;

 const renderSuggestionsContainer= ({ containerProps , children, query }) => {
  return (
    <List {... containerProps}>
      {children}
    </List>
  );
}

 // Use your imagination to render suggestions.
 const renderSuggestion = suggestion => (
   <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary={suggestion.title} />
    </ListItem>
 );

class SearchBox extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
    };

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
      suggestions: ProductStore.getProducts()
    });
  }

  onInputChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    ProductActions.recieveProducts(value);
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Type product id',
      value,
      onChange: this.onInputChange
    };

    return (
      <div className={styles.mainContainer}>
        <SearchIcon />
        <Autosuggest
          theme={styles}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          renderSuggestionsContainer={renderSuggestionsContainer}
          inputProps={inputProps}
        />
      </div>
    );
  }
}

export default SearchBox;
