/**
 * Jokes App
 * https://github.com/shawniscool/2016-Summer-Of-React-Native/tree/master/Project%2003%20-%20Jokes
 */

'use strict'

import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Provider, connect } from 'react-redux'
import configureStore from './store/configureStore'
import AppContainer from './containers/AppContainer'

const store = configureStore()

var JokesApp = React.createClass({

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
})

export default JokesApp
