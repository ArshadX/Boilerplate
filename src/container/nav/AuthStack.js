import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignInScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={SignInScreen} name="SignIn" />
      <Stack.Screen component={SignUpScreen} name="SignUp" />
    </Stack.Navigator>
  );
};

export default AuthStack;
