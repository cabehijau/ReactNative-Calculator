import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native'

import LoginForm from './LoginForm'

class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/Octocat.png')}
          />
          <Text style={styles.title}>An app made for github using React Native</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm/>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db"
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: '#ffffff',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  }
});

export default Login