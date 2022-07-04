import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Button from '../../components/Button';
import Text_Input from '../../components/Text_Input';
import {signInStyle, textInputStyle} from '../../styles/styles';
import {AuthContext} from '../nav/AuthProvider';

const SignUpScreen = () => {
  const {isDarkTheme, user, setUser} = React.useContext(AuthContext);
  return (
    <View
      style={
        isDarkTheme
          ? [signInStyle.container, {backgroundColor: '#000000'}]
          : [signInStyle.container, {backgroundColor: '#ffffff'}]
      }>
      <StatusBar
        barStyle="light-content"
        backgroundColor={isDarkTheme ? '#000000' : '#ffffff'}
      />
      <Text
        style={isDarkTheme ? signInStyle.titleDark : signInStyle.titleLight}>
        Register
      </Text>

      <View
        style={
          isDarkTheme
            ? textInputStyle.containerDark
            : textInputStyle.containerLight
        }>
        <Text_Input
          placeholder="Name"
          style={
            isDarkTheme
              ? signInStyle.textareaDarkTheme
              : signInStyle.textareaLightTheme
          }
        />
      </View>
      <View
        style={
          isDarkTheme
            ? textInputStyle.containerDark
            : textInputStyle.containerLight
        }>
        <Text_Input
          placeholder="Date of Birth"
          style={
            isDarkTheme
              ? signInStyle.textareaDarkTheme
              : signInStyle.textareaLightTheme
          }
        />
      </View>
      <View
        style={
          isDarkTheme
            ? textInputStyle.containerDark
            : textInputStyle.containerLight
        }>
        <Text_Input
          placeholder="Mobile No."
          style={
            isDarkTheme
              ? signInStyle.textareaDarkTheme
              : signInStyle.textareaLightTheme
          }
        />
      </View>
      <View
        style={
          isDarkTheme
            ? textInputStyle.containerDark
            : textInputStyle.containerLight
        }>
        <Text_Input
          placeholder="Gender"
          style={
            isDarkTheme
              ? signInStyle.textareaDarkTheme
              : signInStyle.textareaLightTheme
          }
        />
      </View>
      <View
        style={
          isDarkTheme
            ? textInputStyle.containerDark
            : textInputStyle.containerLight
        }>
        <Text_Input
          placeholder="email"
          style={
            isDarkTheme
              ? signInStyle.textareaDarkTheme
              : signInStyle.textareaLightTheme
          }
        />
      </View>

      <Button title="Register" onPress={() => console.log('Logged in')} />
    </View>
  );
};

export default SignUpScreen;
