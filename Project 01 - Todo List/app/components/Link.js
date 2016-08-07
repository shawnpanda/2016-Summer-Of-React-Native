import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';


class Link extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const {children} = this.props
    return (
      <TouchableOpacity onPress={this.props.onPress} >
        <Text style={{
            fontWeight: this.props.active ? '700' : 'normal', 
            textDecorationLine: this.props.active ? 'underline' : 'none',
            color: this.props.active ? 'red' : '#696969'
            }}>
            {children}</Text>
      </TouchableOpacity>
    )
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
}

export default Link