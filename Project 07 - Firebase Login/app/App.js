import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'
import configureStore from './store/configureStore'
import { Router, Scene } from 'react-native-router-flux';
import Login from './containers/Login'
import Register from './containers/Register'
import Profile from './containers/Profile'
import ForgotPassword from './containers/ForgotPassword'


import { authInitialState } from './reducers/authReducers'
import { profileInitialState } from './reducers/profileReducers'


const store = configureStore();
const RouterWithRedux = connect()(Router);

class LoginApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="Register" hideNavBar={true} component={Register} initial={true} />
          <Scene key="Login" hideNavBar={true} component={Login} />        
          <Scene key="Profile" hideNavBar={true} component={Profile} />        
          <Scene key="ForgotPassword" hideNavBar={true} component={ForgotPassword} />        
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default LoginApp
