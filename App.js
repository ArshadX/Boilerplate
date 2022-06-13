import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AuthProvider from './src/container/nav/AuthProvider';
import Routes from './src/container/nav/Routes';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
const App = () => {
  React.useEffect(() => {
    try {
      GoogleSignin.configure({
        webClientId:
          '993907281977-4s1d9ppq7v19kdi91rh4p93thr31m4to.apps.googleusercontent.com',
      });
      console.log('connection established');
    } catch (e) {
      console.log('not establsihed');
    }
  }, []);
  return (
    <Provider store={store}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'sens-serif',
    marginBottom: 10,
  },
  text: {
    color: '#ffffff',
    fontSize: 15,
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50,
  },
});
export default App;
