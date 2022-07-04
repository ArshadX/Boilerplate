import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import {View, Text} from 'react-native';
import Button from '../../components/Button';
import RNBootSplash from 'react-native-bootsplash';
import AuthStack from './AuthStack';
import {useSelector} from 'react-redux';
import Dashboard from '../Screens/Dashboard';
import Profile from '../Screens/Profile';
const UserLoggedIn = ({user}) => {
  const {logout, toggleTheme, setUser} = React.useContext(AuthContext);
  const state = useSelector(state => state.user);
  return (
    <View>
      <Text>Heelo</Text>
      <Text>{user.uid}</Text>
      <Button
        title="Sign out"
        onPress={() => (state.isSocialLogin ? logout() : setUser(null))}
      />
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
      {user ? (
        <BottomTabNavigator
          initialRouteName="Dashboard"
          firstScreen={Dashboard}
          firstScreenName="Dashboard"
          secondScreen={Profile}
          secondScreenName="Profile"
          firstbarIcon="home"
          secondbarIcon="account"
          iconColor={isDarkTheme ? '#0000ff' : '#000'}
        />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default Routes;
