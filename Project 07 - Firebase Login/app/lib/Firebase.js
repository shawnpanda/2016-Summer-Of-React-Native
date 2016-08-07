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
    .then((user) => {
      return user;
    })
    .catch((error) => {
      // alert('error code is ' + error.code);
      alert('error message is ' + error.message);
      throw(error.message)
    })
  }

  async login(data) {
    return await this.firebase.signInWithEmailAndPassword(data.email, data.password)
    .then((user) => {
      return user;
    })
    .catch((error) => {
      // alert('error code is ' + error.code);
      // alert('error message is ' + error.message);
      throw(error.message)
    })
  }

  async logout() {
    return await this.firebase.signOut()
      .catch((error) => {
        throw(error.message)
      })
  }

  async resetPassword(data) {
    return await this.firebase.sendPasswordResetEmail(data.email)
      .catch((error) => {
        // alert('error message is ' + error.message);
        throw(error.message)
      })
  }
  async getProfile() {
  }
  async updateProfile(data) {
    var user = this.firebase.currentUser
    return await user
        .updateEmail(data.email).then(() => {
          user.updateProfile({
            displayName: data.username
          }).then(() => {
            return
          }).catch((error) => {
            // alert('error message is ' + error.message);
            throw(error.message)
          })
    }, function(error) {
      alert('error message is ' + error.message);
      throw(error)
    })
  }  
}