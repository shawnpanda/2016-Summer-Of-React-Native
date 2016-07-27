import React, { Component } from 'react'
import {Scene, Router, Actions} from 'react-native-router-flux'
import { Provider, connect } from 'react-redux'
import configureStore from './store/configureStore'
import HomeContainer from './containers/HomeContainer'
import Edit from './components/Edit'

const store = configureStore()
const RouterWithRedux = connect()(Router)

class OfflineStorage extends Component {
  render() {
    const addNote = () => {Actions.edit()}
    return <Provider store={store}> 
    <RouterWithRedux>
      <Scene key='home' component={HomeContainer} 
          title='Home' initial={true} onRight={addNote} rightTitle="Add"/>
      <Scene key='edit' title='Add' component={Edit}/>
    </RouterWithRedux>
    </Provider>
  }
}

export default OfflineStorage