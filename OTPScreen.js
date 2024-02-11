// OTPScreen.js
import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function OTPScreen({ navigation, route }) {
  const [otp, setOtp] = useState('');
  const { identifier } = route.params;

  const handleVerifyOTP = () => {
    // Handle OTP verification logic (you can add your own validation)
    if (!otp || otp.length !== 4) {
      alert('Please enter a valid 4-digit OTP.');
    } else {
      alert(`Verifying OTP: ${otp}`);
      // Assuming OTP verification is successful, navigate to SuccessScreen
      navigation.navigate('SuccessScreen');
    }
  };

  const handleGoBack = () => {
    // Navigate back to the previous screen (ForgotPasswordScreen.js)
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.imgBackground} source={require('./assets/OTPBG.png')} resizeMode="cover">
        <View style={styles.contentContainer}>
          <View style={styles.innerContainer}>
            <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
              <Icon name="arrow-undo-circle-outline" size={40} color="#984C33" />
            </TouchableOpacity>

            <Text style={styles.headerText}>Enter OTP</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter 4-digit OTP"
              keyboardType="numeric"
              maxLength={4}
              value={otp}
              onChangeText={(text) => setOtp(text)}
            />

            <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOTP}>
              <Text style={styles.buttonText}>Verify</Text>
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
    marginTop: -70,
  },
  backButton: {
    position: 'absolute',
    top: -200,
    left: -25,
    backgroundColor: 'transparent',
  },
  headerText: {
    color: 'brown',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    textAlign: 'center',
  },
  verifyButton: {
    backgroundColor: '#984C33',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});