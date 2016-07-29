import { connect } from 'react-redux'
import React, { Component, PropTypes} from 'react'
import { View, Text } from 'react-native'

function mapStateToProps(state) {
  return {
    ...state
  }
}

class Login extends Component {
  render () {
    return (
    <View>
      <Text>abc</Text>
    </View>

    )
  }
}

export default connect(mapStateToProps)(Login)