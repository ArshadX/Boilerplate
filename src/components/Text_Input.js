import React from 'react';
import {TextInput} from 'react-native';
import {AuthContext} from '../container/nav/AuthProvider';
const Text_Input = ({placeholder, onChangeText, style}) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={style}
    />
  );
};

export default Text_Input;
