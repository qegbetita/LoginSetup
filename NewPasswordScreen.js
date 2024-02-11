// NewPasswordScreen.js
import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, Text, ImageBackground } from 'react-native';

export default function NewPasswordScreen({ navigation }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    // Handle the logic to reset the password
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }
  
    // Implement your logic for updating the password, e.g., send a request to the server
  
    // Display a success message
    alert('Password reset successful!');
  
    // Navigate to the SuccessScreen or any other relevant screen after resetting the password
    navigation.navigate('SignInScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.imgBackground} source={require('./assets/NewPassBG.png')} resizeMode="cover">
        <View style={styles.contentContainer}>
          <TextInput
            style={styles.input}
            placeholder="New Password"
            secureTextEntry={true}
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />

          <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center', // Center horizontally and vertically
  },
  contentContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center', // Center horizontally
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white', // Adjust input background color based on your design
  },
  resetButton: {
    backgroundColor: '#984C33',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});