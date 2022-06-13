import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/Button';
import Text_Input from '../../components/Text_Input';
import {signInStyle} from '../../styles/styles';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {AuthContext} from '../nav/AuthProvider';
const SignInScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {googleLogin} = React.useContext(AuthContext);
  return (
    <View style={signInStyle.container}>
      <Text style={signInStyle.title}>Login to your account</Text>
      <View style={signInStyle.textarea}>
        <Text_Input onChangeText={e => setEmail(e)} />
      </View>
      <View style={signInStyle.textarea}>
        <Text_Input onChangeText={e => setPassword(e)} />
      </View>
      <Button title="Login" onPress={() => console.log('Logged in')} />

      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => googleLogin().then(() => console.log('heelo'))}
      />
    </View>
  );
};

export default SignInScreen;
