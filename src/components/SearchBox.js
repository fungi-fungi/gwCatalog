'use strict';

import React from 'react';

import Autosuggest from 'react-autosuggest';
import SearchIcon from 'material-ui-icons/Search';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import Paper from 'material-ui/Paper';
import { CircularProgress } from 'material-ui/Progress';

import styles from '../styles/SearchBox.css'

/**
 * SearchBox component
 */
 const getSuggestionValue = suggestion => suggestion.id;

 const renderSuggestionsContainer= ({ containerProps , children, query }) => {
  return (
    <List {... containerProps}>
      {children}
    </List>
  );
}

 const renderSuggestion = suggestion => (
   <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary={suggestion.title} />
    </ListItem>
 );

class SearchBox extends React.Component {

  render() {
    const { suggestions,
            value,
            onSuggestionsClearRequested,
            onSuggestionsFetchRequested,
            onSuggestionSelected,
            onInputChange,
            isLoading
           } = this.props;

    const inputProps = {
      placeholder: 'Type product id',
      value,
      onChange: onInputChange
    };

    return (
      <Paper className={styles.mainContainer}>
        <SearchIcon />
        <Autosuggest
          theme={styles}
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          renderSuggestionsContainer={renderSuggestionsContainer}
          inputProps={inputProps}
          onSuggestionSelected={onSuggestionSelected}
        />
        { isLoading ? (
          <CircularProgress size={20} />
        ) : (
          <div className={styles.loadingPlaceholder}></div>
        )}
      </Paper>
    );
  }
}

export default SearchBox;
