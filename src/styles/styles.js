import {StyleSheet, Dimensions} from 'react-native';

export const textInputStyle = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    borderColor: '#FF0000',
    borderWidth: 1,
  },
  textarea: {
    color: '#000000',
  },
});

export const signInStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: '#ffffff',
  },
  textarea: {
    marginBottom: 10,
    marginTop: 10,
  },
});

export const buttonStyles = StyleSheet.create({
  pressableStyle: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 120,
    marginRight: 120,
    borderRadius: 6,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonText: {
    color: '#ffffff',
  },
  pressIn: {
    backgroundColor: '#0000cd',
  },
  pressOut: {
    backgroundColor: '#4169e1',
  },
});
