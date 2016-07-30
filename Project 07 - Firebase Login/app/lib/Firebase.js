'use strict'

require('regenerator/runtime');

import Backend from './Backend'
import * as firebase from 'firebase'

// Private git ignored file
import { API_KEY, AUTH_DOMAIN, DATABASE_URL, STORAGE_BUCKET } from './secrets'

export default class Firebase extends Backend{
  constructor(token) {
    var config = {
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      storageBucket: STORAGE_BUCKET,
    };
    firebase.initializeApp(config);
  }

  async signup(data) {

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