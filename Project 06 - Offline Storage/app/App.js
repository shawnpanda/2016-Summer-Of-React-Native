import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import {Scene, Router, Actions} from 'react-native-router-flux'
import { Provider, connect } from 'react-redux'
import configureStore from './store/configureStore'
import HomeContainer from './containers/HomeContainer'
import EditContainer from './containers/EditContainer'
import {persistStore} from 'redux-persist'

const store = configureStore()
const persistor = persistStore(store, {storage: AsyncStorage})
const RouterWithRedux = connect()(Router)

class OfflineStorage extends Component {
  render() {
    const addNote = () => {Actions.edit()}
    return <Provider store={store} persistor={persistor}> 
    <RouterWithRedux>
      <Scene key='home' component={HomeContainer} 
          title='Home' initial={true} onRight={addNote} rightTitle="Add"/>
      <Scene key='edit' title='Add' component={EditContainer}/>
    </RouterWithRedux>
    </Provider>
  }
}

export default OfflineStorage