import React, { PropTypes as T } from 'react'
import { EventEmitter } from 'events'
import { isTokenExpired } from './jwtHelper'
import auth0 from 'auth0-js'
import LoginStore from '../stores/LoginStore'
import LoginActions from '../actions/LoginActions'
import { browserHistory } from 'react-router'

export default class AuthService extends EventEmitter {
  constructor(clientId, domain) {
    super()

    this.auth0 = new auth0.WebAuth({
      domain: domain,
      clientID: clientId,
      redirectUri: 'http://localhost:8080/callback',
      audience: 'https://gatewayexhibits.auth0.com/api/v2/',
      scope: 'openid profile read:current_user',
      responseType: 'token id_token'
    })

    this.login = this.login.bind(this)
  }

  parseHash(hash) {
    this.auth0.parseHash(hash, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        console.log(authResult);
        browserHistory.push('/home')
      } else if (err) {
        console.log(err);
      }
    });
  }

  login(username, password) {
    this.auth0.client.login({
      domain: domain,
      clientID: clientId,
      redirectUri: 'http://localhost:8080',
      audience: 'https://gatewayexhibits.auth0.com/api/v2/',
      scope: 'openid profile read:current_user',
      responseType: 'token id_token'
    }, (err, authResult) => {
      if (err) {
        alert('Error: ' + err.description)
        return
      }
      if (authResult && authResult.idToken && authResult.accessToken){
        LoginActions.loginUser( authResult.idToken, authResult.accessToken, authResult.refreshToken );
        browserHistory.replace('/home/dashboard');
      }
    })
  }

  loggedIn() {
    const token = this.getToken()
    return !!token && !isTokenExpired(token)
  }

  getToken() {
    return localStorage.getItem('id_token')
  }

  logout() {
    localStorage.removeItem('id_token')
    localStorage.removeItem('profile')
    localStorage.removeItem('refresh_token')
  }

}
