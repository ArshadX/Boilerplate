import {StyleSheet, Dimensions} from 'react-native';

export const textInputStyle = StyleSheet.create({
  containerDark: {
    width: Dimensions.get('window').width - 40,
    backgroundColor: '#abb2b9',
    borderRadius: 100,
    marginBottom: 20,
  },
  containerLight: {
    width: Dimensions.get('window').width - 40,
    backgroundColor: '#808b96',
    borderRadius: 100,
    marginBottom: 20,
  },
});

export const signInStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  titleLight: {
    fontSize: 30,
    color: '#000000',
  },
  titleDark: {
    fontSize: 30,
    color: '#ffffff',
  },
  textarea: {
    marginBottom: 10,
    marginTop: 10,
  },
  textareaLightTheme: {
    color: '#000000',
  },
  textareaDarkTheme: {
    color: '#000000',
  },
  text: {
    color: '#ffffff',
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
