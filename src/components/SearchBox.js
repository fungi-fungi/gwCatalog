'use strict';

import React from 'react';

import Autosuggest from 'react-autosuggest';
import SearchIcon from 'material-ui-icons/Search';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';

import styles from '../styles/SearchBox.css'

/**
 * SearchBox component
 */

 const languages = [
   {
     name: 'cc 12',
     year: 1972
   },
   {
     name: 'Ccc 43',
     year: 1972
   },
   {
     name: 'C',
     year: 1972
   },
   {
     name: 'Ccc',
     year: 1972
   },
   {
     name: 'Cccc 67',
     year: 1972
   },
   {
     name: 'C 234234',
     year: 1972
   },
   {
     name: 'Ccccc 324',
     year: 1972
   },
   {
     name: 'Ccc',
     year: 1972
   },
   {
     name: 'C',
     year: 1972
   },
   {
     name: 'Cc',
     year: 1972
   },
   {
     name: 'Cc',
     year: 1972
   },
   {
     name: 'Elm',
     year: 2012
   }
 ];

 // Teach Autosuggest how to calculate suggestions for any given input value.
 const getSuggestions = value => {
   const inputValue = value.trim().toLowerCase();
   const inputLength = inputValue.length;

   return inputLength === 0 ? [] : languages.filter(lang =>
     lang.name.toLowerCase().slice(0, inputLength) === inputValue
   );
 };

 // When suggestion is clicked, Autosuggest needs to populate the input element
 // based on the clicked suggestion. Teach Autosuggest how to calculate the
 // input value for every given suggestion.
 const getSuggestionValue = suggestion => suggestion.name;

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
      <ListItemText primary={suggestion.name} />
    </ListItem>
 );

class SearchBox extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
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
      onChange: this.onChange
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
