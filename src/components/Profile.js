'use strict';

import React from 'react';

import Typography from 'material-ui/Typography';

import styles from '../styles/Profile.css'

class Profile extends React.Component {

  render() {

    const profile = JSON.parse(localStorage.getItem('profile')) || { picture: '',  name: ''};

    return (
      <div className={styles.wrapper}>
        <img className={styles.imgCircle} src={ profile.picture } />
        <Typography style={{color:'white'}} type="body2">
          { profile.name }
        </Typography>
      </div>

    );

  }
}

export default Profile;
