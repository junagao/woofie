import React from 'react';
import Expo, { Video } from 'expo';
import { Text, View, Image, StyleSheet, Alert } from 'react-native';

import bgVideo from '../assets/bg-video.mp4';
import logo from '../assets/logo.png';
import FacebookButton from '../components/FacebookButton';

import * as firebase from 'firebase';
import firebaseConfig from '../config/firebase';
firebase.initializeApp(firebaseConfig);

export default class Login extends React.Component {

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate('Home');
      }
    });
  }

  loginWithFacebook = async () => {

    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      '358905621286418',
      { permissions: ['public_profile', 'email', 'user_birthday'] }
    );

    if (type === 'success') {
      const fields = ['id', 'first_name', 'last_name', 'gender', 'birthday'];
      const response = await fetch(`https://graph.facebook.com/me?fields=${fields.toString()}&access_token=${token}`);

      // Build Firebase credential with the Facebook access token.
      const credential = await firebase.auth.FacebookAuthProvider.credential(token);

      // Sign in with credential from the Facebook user.
      firebase.auth().signInWithCredential(credential).catch((error) => {
        Alert.alert('Try again');
      });
      const userData = await response.json();

      // create user in the database
      firebase.database().ref('users/' + userData.id).set({
        firstName: userData.first_name,
        lastName: userData.last_name,
        userId: userData.id,
        birthday: userData.birthday,
        gender: userData.gender
      });

    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Video source={bgVideo} shouldPlay resizeMode="cover" isLooping style={styles.video} />
        <View style={styles.container2}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.tagline}>Find a wooer for your beloved dog</Text>
          <FacebookButton onPress={this.loginWithFacebook} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.25)',
    width:'100%',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  logo: {
    marginTop: 120,
    marginBottom: 12,
  },
  tagline: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 400,
  },
});
