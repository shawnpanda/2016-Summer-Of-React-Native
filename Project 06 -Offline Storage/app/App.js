/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Home from './components/Home'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux';
import notesApp from './reducers/reducers'

const store = createStore(notesApp)
const RouterWithRedux = connect()(Router)

class OfflineStorage extends Component {
  render() {
    return <Provider store={store}> 
    <RouterWithRedux>
      <Scene key='home' component={Home} title='Home' initial={true}/>
    </RouterWithRedux>
    </Provider>
  }
}

export default OfflineStorage