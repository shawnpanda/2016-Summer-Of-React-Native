import MapView from 'react-native-maps';
import { StyleSheet, Dimensions, TouchableHighlight, Text, View } from 'react-native';
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
    bottom: 50,
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { currentRegion: {
      latitude: 371.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  }

  getCurrentPosition() {
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
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  onPress() {
    this.getCurrentPosition()
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={ styles.map }
          region= { this.state.currentRegion }
          showsUserLocation = {true}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)}>
          <Text>Get Your Location!</Text>
        </TouchableHighlight>
      </View>
    );
  }

}

export default Home;