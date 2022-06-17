import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Button from '../../components/Button';
import Text_Input from '../../components/Text_Input';
import {signInStyle, textInputStyle} from '../../styles/styles';

import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {AuthContext} from '../nav/AuthProvider';
const SignInScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {googleLogin, isDarkTheme} = React.useContext(AuthContext);
  return (
    <View style={signInStyle.container}>
      <Text
        style={isDarkTheme ? signInStyle.titleDark : signInStyle.titleLight}>
        Login to your account
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
      <Button title="Login" onPress={() => console.log('Logged in')} />

      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => googleLogin().then(() => console.log('heelo'))}
      />
      <Pressable onPress={() => navigation.navigate('SignUp')}>
        <Text style={signInStyle.text}>Create Account</Text>
      </Pressable>
    </View>
  );
};

export default SignInScreen;
