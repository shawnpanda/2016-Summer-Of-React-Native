import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Login from './containers/Login'
import { Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';

const store = configureStore()
const RouterWithRedux = connect()(Router);

class LoginApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root" component={Login} />
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default LoginApp