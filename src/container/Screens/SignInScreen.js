import React from 'react';
import {View, Text, Pressable, StatusBar} from 'react-native';
import Button from '../../components/Button';
import Text_Input from '../../components/Text_Input';
import {defaultStyle, signInStyle, textInputStyle} from '../../styles/styles';

import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {AuthContext} from '../nav/AuthProvider';
const SignInScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {googleLogin, isDarkTheme, user, setUser, setisGoogleLogin} =
    React.useContext(AuthContext);
  const submitForum = e => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      setUser({email: email, password: password});
    }
  };
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
        Login to your account (type random text in the fields)
      </Text>
      <View
        style={
          isDarkTheme
            ? textInputStyle.containerDark
            : textInputStyle.containerLight
        }>
        <Text_Input
          onChangeText={e => setEmail(e)}
          placeholder="hello"
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
          onChangeText={e => setPassword(e)}
          placeholder="hello"
          style={
            isDarkTheme
              ? signInStyle.textareaDarkTheme
              : signInStyle.textareaLightTheme
          }
        />
      </View>
      <Button title="Login" onPress={submitForum} />

      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => googleLogin().then(() => setisGoogleLogin(true))}
      />
      <Pressable onPress={() => navigation.navigate('SignUp')}>
        <Text
          style={isDarkTheme ? signInStyle.textDark : signInStyle.textLight}>
          Create Account
        </Text>
      </Pressable>
    </View>
  );
};

export default SignInScreen;
