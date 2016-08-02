'use strict'

require('regenerator/runtime');

import Backend from './Backend'
import * as firebase from 'firebase'
import { FirebaseApp } from './FirebaseInit'

// Private git ignored file
import { API_KEY, AUTH_DOMAIN, DATABASE_URL, STORAGE_BUCKET } from './secrets'

export default class Firebase extends Backend{
  constructor(token) {
    super(token)
    this.firebase = FirebaseApp
  }

  async signup(data) {
    return await this.firebase.createUserWithEmailAndPassword(data.email, data.password)
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
  async updateProfile(data) {
    var user = this.firebase.currentUser
    console.log(user)
    return await user
        .updateEmail(data.email).then(function() {
          console.log(user)
          return

    }, function(error) {
      alert('error message is ' + error.message);
    })
  }  
}