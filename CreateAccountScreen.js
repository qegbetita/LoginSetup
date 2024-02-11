// CreateAccountScreen.js
import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CreateAccountScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Perform sign-up logic
    if (!firstName || !lastName || !email || !mobileNumber || !password) {
      alert('Please enter all required information.');
    } else {
      alert(`Signing up with:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMobile Number: ${mobileNumber}\nPassword: ${password}`);
      // Add your sign-up logic here
    }
  };

  const handleGoBack = () => {
    // Navigate back to the previous screen (LoginSignup.js)
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.imgBackground} source={require('./assets/Create.png')} resizeMode="cover">
        <View style={styles.contentContainer}>
          <View style={styles.innerContainer}>
            <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
              <Icon name="arrow-undo-circle-outline" size={40} color="#984C33" />
            </TouchableOpacity>

            <View style={styles.inputContainer}>
              <Icon name="person" size={20} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
              />
            </View>

            <View style={styles.inputContainer}>
              <Icon name="person" size={20} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={lastName}
                onChangeText={(text) => setLastName(text)}
              />
            </View>

            <View style={styles.inputContainer}>
              <Icon name="mail" size={20} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>

            <View style={styles.inputContainer}>
              <Icon name="call" size={20} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Mobile Number"
                value={mobileNumber}
                onChangeText={(text) => setMobileNumber(text)}
              />
            </View>

            <View style={styles.inputContainer}>
              <Icon name="lock-closed" size={20} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>

            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
              <Text style={styles.buttonText}>Sign Up</Text>
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
    marginTop: -10,
  },
  backButton: {
    position: 'absolute',
    top: -150,
    left: -30,
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
  signUpButton: {
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
});