import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux'
import { Provider, connect } from 'react-redux'
import { createStore, compose } from 'redux'
import todoApp from './reducers/reducers'
import App from './components/App'
import devTools from 'remote-redux-devtools'
import ChangeTodoContainer from './containers/ChangeTodoContainer'

const enhancer = compose(devTools)
const RouterWithRedux = connect()(Router);

function configureStore(initialState) {
  const store = createStore(
    todoApp,
    initialState,
    compose(
      devTools()
    )
  );
  return store;
};

let store = configureStore();

class TodoApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="home" component={App} title="Home" onRight={()=>Actions.changeTodo()} rightTitle="Add"/>
          <Scene key="changeTodo" component={ChangeTodoContainer} title="Todo"/>
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default TodoApp;