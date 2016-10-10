import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} = FBSDK;

class facebookLogIn extends Component {
  constructor(props) {
    super(props)
    this.state ={
      user: {
        name: null,
        loaded: false
      }
    }
  }

  renderUserInfo() {
    return (
      <View>
        <Text style={styles.text}>Welcome {this.state.user.name}</Text>
        <Text>Your gender is: {this.state.user.gender}</Text>
      </View>
    )
  }

  renderLogInButton() {
    var self = this
    return (
      <LoginButton
        onLoginFinished={
          (error, result) => {
            if (error) {
              alert("login has error: " + result.error);
            } else if (result.isCancelled) {
              alert("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then(
                (data) => {
                  alert(data.accessToken.toString())
                  this._getUserInfo(data.accessToken.toString())
                }
              )
            }
          }
        }
        onLogoutFinished={()=> self._signout()}/>
    )
  }

  _signout() {
    this.setState({user: {
      name: null,
      gender: null,
      loaded: false
    }})
  }
  render() {
    var renderUserInfo = this.renderUserInfo()
    var renderButton = this.renderLogInButton()
    return (
      <View style={styles.container}>
      {this.state.user.loaded && renderUserInfo}
      {renderButton}
      </View>
    )
  }

  // Fb function
  _getUserInfo(token) {
    // the famous params object...
    const profileRequestParams = {
      fields: {
          string: 'id, name, email, gender'
      }
    }

    const profileRequestConfig = {
                httpMethod: 'GET',
                version: 'v2.6',
                parameters: profileRequestParams,
                accessToken: token
    }

    // Create a graph request asking for user information with a callback to handle the response.
    const infoRequest = new GraphRequest(
      '/me',
      profileRequestConfig,
      this._responseInfoCallback.bind(this),
    );
    new GraphRequestManager().addRequest(infoRequest).start();
  }

  _responseInfoCallback(error: ?Object, result: ?Object) {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      // alert('Success fetching data: ' + result.toString());
      console.log(result)
      this.setState({user: {
        name: result.name,
        gender: result.gender,
        loaded: true
      }})
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text : {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  }
});

export default facebookLogIn
