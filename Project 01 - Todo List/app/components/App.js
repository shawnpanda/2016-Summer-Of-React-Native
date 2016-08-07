import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import VisibleTodoList from '../containers/VisibleTodoList';
import FilterTab from '../components/FilterTab'

const App = () => (
  <View>
    <FilterTab />
    <VisibleTodoList />
  </View>
  )


export default App;