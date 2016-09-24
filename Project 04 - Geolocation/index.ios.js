/**
 * Geolocation App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Home from './app/components/Home'

class GeolocationApp extends Component {
  render() {
    const { region } = this.props;
    return (
      <Home />
    );
  }
}

AppRegistry.registerComponent('GeolocationApp', () => GeolocationApp);
