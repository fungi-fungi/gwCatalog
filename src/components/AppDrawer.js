'use strict';

import React from 'react'
import { browserHistory } from 'react-router';

import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import SearchIcon from 'material-ui-icons/Search';
import DeleteIcon from 'material-ui-icons/Delete';
import ReceiptIcon from 'material-ui-icons/Receipt';

import styles from '../styles/AppDrawer.css';

class AppDrawer extends React.Component {

  render() {

    const { isOpen, handleClose } = this.props;

    return (
      <div>
        <Drawer
          open={isOpen}
          onRequestClose={handleClose}
          onClick={handleClose}
          docked={true}
          className={styles.drawerWrapper}
        >
        <div>
          <List disablePadding>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Send mail" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
          <Divider />
          <List disablePadding>
            <ListItem button onClick={ () => { browserHistory.push('/home') } }>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="General search" />
            </ListItem>
            <ListItem button onClick={ () => { browserHistory.push('/categories/1/children') } }>
              <ListItemIcon>
                <ReceiptIcon />
              </ListItemIcon>
              <ListItemText primary="Categories catalog" />
            </ListItem>
          </List>
        </div>
        </Drawer>
      </div>
    )
  }
}

export default AppDrawer;
