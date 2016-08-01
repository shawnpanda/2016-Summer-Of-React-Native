'use strict'

require('regenerator/runtime');

import Backend from './Backend'
import * as firebase from 'firebase'

// Private git ignored file
import { API_KEY, AUTH_DOMAIN, DATABASE_URL, STORAGE_BUCKET } from './secrets'

export default class Firebase extends Backend{
  constructor(token) {
    super(token)
    var config = {
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      storageBucket: STORAGE_BUCKET
    }
    if ( this.firebase == null) {
      this.firebase = firebase.initializeApp(config);
    }
  }

  async signup(data) {
    return await this.firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
    .then((userData) => {
      console.log(userData)
      return userData;        
    })
    .catch(function(error) {
      alert('error code is ' + error.code);
      alert('error message is ' + error.message);
    })
  }

  async login(data) {

  }

  async logout() {

  }

  async resetPassword(data) {

  }
  async getProfile() {
  }
  async updateProfile(userId,data) {
    return await this.firebase.auth().currentUser
        .updateEmail(data.email).then(function() {

    }, function(error) {

    })
  }  
}