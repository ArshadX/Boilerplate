import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/Button';
import Text_Input from '../../components/Text_Input';
import {signInStyle} from '../../styles/styles';

const SignUpScreen = () => {
  return (
    <View style={signInStyle.container}>
      <Text style={signInStyle.title}>Login to your account</Text>
      <View style={signInStyle.textarea}>
        <Text_Input />
      </View>
      <View style={signInStyle.textarea}>
        <Text_Input />
      </View>
      <View style={signInStyle.textarea}>
        <Text_Input />
      </View>
      <View style={signInStyle.textarea}>
        <Text_Input />
      </View>
      <View style={signInStyle.textarea}>
        <Text_Input />
      </View>

      <Button title="Register" onPress={() => console.log('Logged in')} />
    </View>
  );
};

export default SignUpScreen;
