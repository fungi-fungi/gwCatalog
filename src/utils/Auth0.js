
import auth0 from 'auth0-js'

import history from './history';

export default class Auth {

  auth0 = new auth0.WebAuth({
    domain: 'gatewayexhibits.auth0.com',
    clientID: 'VPqqN4tRDsC91w0dVLqNRuDCYFVkuxnF',
    redirectUri: 'http://localhost:8080/callback',
    audience: 'https://gatewayexhibits.auth0.com/api/v2/',
    responseType: 'token id_token',
    scope: 'openid profile user_metadata read:current_user'
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {

    this.auth0.parseHash(window.location.hash, (err, authResult) => {

      if (authResult && authResult.accessToken && authResult.idToken) {

        this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {

          if (err) {
            console.log(err);
          }

          this.setSession(authResult, profile);
          history.replace('/home');
        });

      } else if (err) {
        history.replace('/login');
      }
    });
  }

  setSession(authResult, profile) {
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('profile', JSON.stringify(profile));
    history.replace('/home');
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    history.replace('/home');
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}
