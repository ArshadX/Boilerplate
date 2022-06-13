import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <BottomTabNavigator
      firstScreen={SignInScreen}
      firstScreenName="SignIn"
      secondScreen={SignUpScreen}
      secondScreenName="SignUp"
    />
  );
};

export default AuthStack;
