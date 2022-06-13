import React from 'react';
import {TextInput, View} from 'react-native';
import {textInputStyle} from '../styles/styles';
const Text_Input = ({placeholder, onChangeText}) => {
  return (
    <View style={textInputStyle.container}>
      <TextInput
        placeholder="type in hefre"
        onChangeText={onChangeText}
        style={textInputStyle.textarea}
      />
    </View>
  );
};

export default Text_Input;
