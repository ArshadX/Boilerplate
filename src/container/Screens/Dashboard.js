import React from 'react';
import {StatusBar, Switch, Text, View} from 'react-native';
import Button from '../../components/Button';
import {defaultStyle} from '../../styles/styles';
import {AuthContext} from '../nav/AuthProvider';
const Dashboard = () => {
  const {isDarkTheme, toggleTheme, logout, isGoogleLogin, logoutLocal} =
    React.useContext(AuthContext);
  const LogOut = () => {
    isGoogleLogin ? logout() : logoutLocal();
  };
  return (
    <View
      style={isDarkTheme ? defaultStyle.containerDark : defaultStyle.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={isDarkTheme ? '#000000' : '#ffffff'}
      />
      <View
        style={[
          defaultStyle.headerContainer,
          isDarkTheme ? {backgroundColor: '#000'} : {backgroundColor: '#fff'},
        ]}>
        <Text style={isDarkTheme ? defaultStyle.titleDark : defaultStyle.title}>
          This is a Boilerplate App
        </Text>
        <Text style={isDarkTheme ? defaultStyle.titleDark : defaultStyle.title}>
          Enter Dark mode
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#0000ff'}}
          thumbColor={isDarkTheme ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleTheme}
          value={isDarkTheme}
        />
        <Button title="Logout" onPress={() => LogOut()} />
      </View>
    </View>
  );
};

export default Dashboard;
