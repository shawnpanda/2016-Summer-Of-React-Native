import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'
import configureStore from './store/configureStore'
import { Router, Scene } from 'react-native-router-flux';
import Login from './containers/Login'
import Register from './containers/Register'
import Profile from './containers/Profile'


import { authInitialState } from './reducers/authReducers'
import { profileInitialState } from './reducers/profileReducers'


const store = configureStore();
const RouterWithRedux = connect()(Router);

class LoginApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="register" hideNavBar={true} component={Register} initial={true} />
          <Scene key="login" hideNavBar={true} component={Login} />        
          <Scene key="profile" hideNavBar={true} component={Profile} />        
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default LoginApp
