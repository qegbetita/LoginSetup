// LoginSignup.js
import React from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView, TouchableOpacity, Text } from 'react-native';

export default function LoginSignup({ navigation }) {
  const handleSignIn = () => {
    navigation.navigate('SignInScreen');
  };

  const handleCreateAccount = () => {
    navigation.navigate('CreateAccountScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.imgBackground} source={require('./assets/LOGINBG.png')} resizeMode="cover">
        <View style={styles.contentContainer}>
          <View style={styles.innerContainer}>
            <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInButton: {
    backgroundColor: 'white',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: -100, // Adjust as needed
  },
  createAccountButton: {
    backgroundColor: '#984C33', // Adjust the color as needed
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 110, // Adjust as needed
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});