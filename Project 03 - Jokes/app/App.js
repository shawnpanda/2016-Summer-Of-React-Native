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
import { createStore } from 'redux'
import jokesApp from './reducers/index'
import FormContainer from './containers/FormContainer'

const store = createStore(jokesApp)
if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/index', () => {
      const nextRootReducer = require('./reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
}


var JokesApp = React.createClass({

  render() {
    return (
      <Provider store={store}>
        <FormContainer />
      </Provider>
    );
  }
})

export default JokesApp
