import * as firebase from 'firebase'
import { API_KEY, AUTH_DOMAIN, DATABASE_URL, STORAGE_BUCKET } from './secrets'

var config = {
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      storageBucket: STORAGE_BUCKET
    }

export var FirebaseApp = firebase.initializeApp(config).auth();