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
    this.firebase = firebase.initializeApp(config);
  }

  async signup(data) {
    return await this.firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
    .then((response) => {
      return response.json().then(json => {
        return json;
      })
    })
    .catch(function(error) {
      if(error){
        alert(error);
        switch(error.code){
          case "EMAIL_TAKEN":
            alert("The new user account cannot be created because the email is already in use.");
          break;

          case "INVALID_EMAIL":
            alert("The specified email is not a valid email.");
          break;

          default:
            alert("Error creating user:");
        }
      }
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
  }  
}