import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()

class LoginApp extends Component {
  render() {
    return (
      <Provider store={store}>
      <View>
        <Text>
          Welcome to React Native!
        </Text>
      </View>
      </Provider>
    );
  }
}

export default LoginApp
