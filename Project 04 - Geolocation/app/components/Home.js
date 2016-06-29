import MapView from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';
import React, { Component } from 'react';

var { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { currentRegion: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
       console.log(position);
        this.setState({currentRegion: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  render() {
    return (
      <MapView
        style={ styles.map }
        region= { this.state.currentRegion }
        showsUserLocation = {true}
      />
    );
  }

}

export default Home;