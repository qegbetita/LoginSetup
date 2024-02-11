// ForgotPasswordScreen.js
import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ForgotPasswordScreen({ navigation }) {
  const [identifier, setIdentifier] = useState('');

  const handleContinue = () => {
    // Handle continue logic (you can add your own validation)
    if (!identifier) {
      alert('Please enter your email or mobile number.');
    } else {
      console.log('Navigating to OTPScreen with identifier:', identifier);
      // Navigate to the OTPScreen with the identifier
      navigation.navigate('OTPScreen', { identifier });
    }
  };

  const handleGoBack = () => {
    // Navigate back to the previous screen (LoginSignup.js)
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.imgBackground} source={require('./assets/RESETBG.png')} resizeMode="cover">
        <View style={styles.contentContainer}>
          <View style={styles.innerContainer}>
            <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
              <Icon name="arrow-undo-circle-outline" size={40} color="#984C33" />
            </TouchableOpacity>

            <View style={styles.inputContainer}>
              <Icon name="mail-outline" size={20} color="white" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Email or Mobile Number"
                value={identifier}
                onChangeText={(text) => setIdentifier(text)}
              />
            </View>

            <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
              <Text style={styles.buttonText}>Continue</Text>
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
    marginTop: -170,
  },
  backButton: {
    position: 'absolute',
    top: -170,
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
  continueButton: {
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