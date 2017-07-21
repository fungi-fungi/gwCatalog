'use strict';

import React from 'react'

import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import SearchIcon from 'material-ui-icons/Search';

import ReceiptIcon from 'material-ui-icons/Receipt';
import MediaQuery  from 'react-responsive';

import Profile from './Profile';

import styles from '../styles/AppDrawer.css';

class AppDrawer extends React.Component {

  render() {

    const { isOpen, handleClose } = this.props;

    return (
      <div>
        <MediaQuery query='(min-device-width: 800px)'>
          <Drawer
            open={isOpen}
            onRequestClose={handleClose}
            onClick={handleClose}
            docked={true}
            className={styles.drawerWrapper}
          >
          <div>
            <Profile />
            <Divider />
            <List disablePadding>
              <ListItem button onClick={ () => { this.props.history.replace('/home') } }>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="General search" />
              </ListItem>
              <ListItem button onClick={ () => { this.props.history.replace('/categories/1/children') } }>
                <ListItemIcon>
                  <ReceiptIcon />
                </ListItemIcon>
                <ListItemText primary="Categories catalog" />
              </ListItem>
            </List>
          </div>
          </Drawer>
      </MediaQuery>
      </div>
    )
  }
}

export default AppDrawer;
