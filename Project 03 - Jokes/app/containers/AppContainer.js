import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import FormContainer from '../containers/FormContainer'
import { submitName } from '../actions/index'
import Joke from '../components/Joke'

class AppContainer extends Component {
  hasName() {
    return this.props.FirstName && this.props.LastName
  }

  render() {
    if (!this.hasName()) {
      return (
        <FormContainer />
      )
    }
    return (
        <Joke 
          FirstName={this.props.FirstName}
          LastName={this.props.LastName}
        />
    )
  }
}


const mapStateToProps = (state) => {
  const { FirstName, LastName } = state.person
  return {
    FirstName,
    LastName
  }
}

AppContainer = connect(mapStateToProps)(AppContainer)

export default AppContainer