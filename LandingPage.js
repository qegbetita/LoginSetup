// LandingPage.js
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';

export default function LandingPage({ navigation }) {
  const handleContinue = () => {
    navigation.navigate('LoginSignup');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={handleContinue}>
        <ImageBackground style={styles.imgBackground} source={require('./assets/BSWMBG.png')} resizeMode='cover'>
          <View style={styles.contentContainer}>
            <Text style={styles.tapToContinue}>Tap to Continue</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchable: {
    flex: 1,
  },
  imgBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 210,
  },
  tapToContinue: {
    fontSize: 16,
    color: 'black',
  },
});