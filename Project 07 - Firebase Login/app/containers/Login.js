import { connect } from 'react-redux'
import React, { Component, PropTypes} from 'react'
import { StyleSheet, View, Text } from 'react-native'

function mapStateToProps(state) {
  return {
    ...state
  }
}

class Login extends Component {
  render () {
    return (
    <View style={styles.container}>
      <Text>abcasdasdas</Text>
    </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60
  }
});

export default connect(mapStateToProps)(Login)