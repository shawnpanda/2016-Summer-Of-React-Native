/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {Scene, Router} from 'react-native-router-flux'
import HomeContainer from './containers/HomeContainer'
import { Provider, connect } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()
const RouterWithRedux = connect()(Router)

class OfflineStorage extends Component {
  render() {
    return <Provider store={store}> 
    <RouterWithRedux>
      <Scene key='home' component={HomeContainer} title='Home' initial={true}/>
    </RouterWithRedux>
    </Provider>
  }
}

export default OfflineStorage