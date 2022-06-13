import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = ({
  firstScreen,
  secondScreen,
  thirdScreen,
  forthScreen,
  firstScreenName,
  secondScreenName,
  thirdScreenName,
  forthScreenName,
  initialRouteName,
}) => {
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{headerShown: false}}>
      {firstScreen == null ? null : (
        <Tab.Screen
          component={firstScreen}
          name={firstScreenName}
          options={{
            tabBarIcon: () => <Icon name="account" color="#000" size={20} />,
          }}
        />
      )}
      {secondScreen == null ? null : (
        <Tab.Screen
          component={secondScreen}
          name={secondScreenName}
          options={{
            tabBarIcon: () => (
              <Icon name="account-plus" color="#000" size={20} />
            ),
          }}
        />
      )}
      {thirdScreen == null ? null : (
        <Tab.Screen component={thirdScreen} name={thirdScreenName} />
      )}
      {forthScreen == null ? null : (
        <Tab.Screen component={forthScreen} name={forthScreenName} />
      )}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;