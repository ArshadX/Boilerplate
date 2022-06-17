import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import React from 'react';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import BottomTabNavigator from './BottomTabNavigator';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {View, Text} from 'react-native';
import Button from '../../components/Button';
import RNBootSplash from 'react-native-bootsplash';
import AuthStack from './AuthStack';
const UserLoggedIn = ({user}) => {
  const {logout, toggleTheme} = React.useContext(AuthContext);
  return (
    <View>
      <Text>Heelo</Text>
      <Text>{user.uid}</Text>
      <Button title="Sign out" onPress={() => logout()} />
      <Button title="theme change" onPress={() => toggleTheme()} />
    </View>
  );
};
const Routes = () => {
  const [initializing, setInitializing] = React.useState(true);
  const {user, setUser, isDarkTheme} = React.useContext(AuthContext);
  const myTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      text: '#ffffff',
    },
  };
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer
      onReady={() => RNBootSplash.hide()}
      theme={isDarkTheme ? myTheme : DefaultTheme}>
      {user ? <UserLoggedIn user={user} /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
