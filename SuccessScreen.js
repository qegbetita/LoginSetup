// SuccessScreen.js
import React from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text, ImageBackground } from 'react-native';

export default function SuccessScreen({ navigation }) {
  const handleContinue = () => {
    // Handle the logic to navigate to the next screen after OTP verification
    // For example, you can navigate to the home screen or any other relevant screen.
    // Replace 'HomeScreen' with the actual name of the screen you want to navigate to.
    navigation.navigate('NewPasswordScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.imgBackground} source={require('./assets/SuccessBG.png')} resizeMode="cover">
        <View style={styles.contentContainer}>
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Apply any additional styling for the container if needed
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
    // Apply any additional styling for the content container if needed
  },
  successText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white', // Set the color for the success text
    // Apply any additional styling for the success text if needed
  },
  continueButton: {
    backgroundColor: '#984C33',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: -70, // Add marginTop for spacing
    // Apply any additional styling for the continue button if needed
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});