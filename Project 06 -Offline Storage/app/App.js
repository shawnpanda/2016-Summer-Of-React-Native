/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Home from './components/Home'

class OfflineStorage extends Component {
  render() {
    return <Router>
      <Scene key='home' component={Home} title='Home' initial={true}/>
    </Router>
  }
}

export default OfflineStorage