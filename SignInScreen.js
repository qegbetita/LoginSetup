// SignInScreen.js
import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Perform sign-in logic
    if (!email || !password) {
      alert('Please enter both email and password.');
    } else {
      alert(`Signing in with Email: ${email}, Password: ${password}`);
      // Add your sign-in logic here
    }
  };

  const handleForgotPassword = () => {
    // Navigate to the ForgotPasswordScreen
    navigation.navigate('ForgotPasswordScreen');
  };

  const handleGoBack = () => {
    // Navigate back to the previous screen (LoginSignup.js)
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.imgBackground} source={require('./assets/WelcomeBack.png')} resizeMode="cover">
        <View style={styles.contentContainer}>
          <View style={styles.innerContainer}>
            <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
              <Icon name="arrow-undo-circle-outline" size={40} color="#984C33" />
            </TouchableOpacity>

            <View style={styles.inputContainer}>
              <Icon name="mail-outline" size={20} color="white" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>

            <View style={styles.inputContainer}>
              <Icon name="lock-closed-outline" size={20} color="white" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
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
    marginTop: 70,
  },
  backButton: {
    position: 'absolute',
    top: -250,
    left: -25,
    backgroundColor: 'transparent',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
  icon: {
    marginRight: 10,
    color: 'black',
  },
  input: {
    flex: 1,
    color: 'black',
  },
  loginButton: {
    backgroundColor: '#984C33',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: 'white',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  forgotPasswordText: {
    color: 'white',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});