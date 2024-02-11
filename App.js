// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './LandingPage';
import LoginSignup from './LoginSignup';
import SignInScreen from './SignInScreen';
import CreateAccountScreen from './CreateAccountScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import OTPScreen from './OTPScreen';
import SuccessScreen from './SuccessScreen';
import NewPasswordScreen from './NewPasswordScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }} />
        <Stack.Screen name="LoginSignup" component={LoginSignup} options={{ headerShown: false }} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}