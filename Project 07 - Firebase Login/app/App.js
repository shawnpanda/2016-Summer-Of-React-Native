import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'
import configureStore from './store/configureStore'
import { Router, Scene } from 'react-native-router-flux';
import Login from './containers/Login'

import { authInitialState } from './reducers/authReducers'

const store = configureStore({
  auth: new authInitialState
});
const RouterWithRedux = connect()(Router);

class LoginApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="login" hideNavBar={true} component={Login} />
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default LoginApp
