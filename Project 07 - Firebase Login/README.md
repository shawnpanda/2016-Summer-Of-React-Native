# Firebase Login

This app serves as a starter react native app with login/register/forgot password functionality with integration from Firebase.

I was aware that I would need to set up a react native app with registration functionality and came across [snowflake](https://github.com/bartonhammond/snowflake) (A React-Native starter mobile app, or maybe just an example, or maybe a boilerplate (you decide) for iOS and Android with a single code base). Overwhelmed by the complexity of snowflake, I decided to write a similar app myself in order to reinforce my RN knowledge and to learn new tools. In addition, without prior knowledge of setting up a server myself, I decided to connect the app to Firebase.

This app took longer than any of my previous apps, and the whole process has been extremel fruitful. I was able to learn from the complexity of snowflake and deepened my understanding of redux abstraction.

### Demo



### Library Used
* redux
* react-native-router-flux
* react-redux
* redux-logger
* redux-thunk
* tcomb-form-native
* immutable
* firebase
* apsl-react-native-button

### What I have learned

* Using bindActionCreators function in containers
* Utilizing immutability to enforce that the store state is never directly altered
* Abstracting the whole form (Login, Profile, Register) from the LoginRender class
* Utilizing Firebase auth API

### Todo

- Stronger field validation

###Useful Links

*[snowflake](https://github.com/bartonhammond/snowflake)