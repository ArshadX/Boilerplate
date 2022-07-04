import React from 'react';
import {Image, StatusBar, Text, View, Animated} from 'react-native';
import {defaultStyle} from '../../styles/styles';
import {AuthContext} from '../nav/AuthProvider';
import ProfilePic from '../../components/ProfilePic';
import Button from '../../components/Button';
import {useFocusEffect} from '@react-navigation/native';
import Text_Input from '../../components/Text_Input';
const Profile = () => {
  const {isDarkTheme} = React.useContext(AuthContext);
  const [colorChangeValue, setColorChangeValue] = React.useState('#ffffff');
  const flexAnimate = React.useRef(new Animated.Value(0)).current;
  useFocusEffect(
    React.useCallback(() => {
      Animated.timing(flexAnimate, {
        toValue: 0.5,
        duration: 500,
        useNativeDriver: false,
      }).start();
      return () => {
        Animated.timing(flexAnimate, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }).start();
      };
    }, []),
  );

  const animate = () => {
    let colors = [
      '#FF0000',
      '#00FFFF',
      '#0000FF',
      '#00008B',
      '#ADD8E6',
      '#800080',
      '#FFFF00',
      '#00FF00',
    ];
    setColorChangeValue(
      colors[Math.floor(Math.random() * (colors.length - 1))],
    );
  };
  return (
    <View style={[defaultStyle.container, {backgroundColor: colorChangeValue}]}>
      <StatusBar
        barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkTheme ? '#000000' : colorChangeValue}
      />
      <View style={defaultStyle.headerContainer}>
        <ProfilePic
          onPress={animate}
          imageSrc={require('../../assets/Sultan.jpg')}
        />
        <Text style={defaultStyle.title}>{colorChangeValue}</Text>
      </View>
      <Animated.View
        style={[defaultStyle.footerContainer, {flexGrow: flexAnimate}]}>
        <Text style={defaultStyle.listTitles}>Email</Text>

        <View style={defaultStyle.listItem}>
          <Text style={defaultStyle.text}>abc@gmail.com</Text>
        </View>

        <Text style={defaultStyle.listTitles}>Phone</Text>

        <View style={defaultStyle.listItem}>
          <Text style={defaultStyle.text}>35335526324</Text>
        </View>

        <Text style={defaultStyle.listTitles}>DOB</Text>

        <View style={defaultStyle.listItem}>
          <Text style={defaultStyle.text}>15-09-1995</Text>
        </View>

        <Text style={defaultStyle.listTitles}>About</Text>
        <View style={defaultStyle.listItem}>
          <Text style={defaultStyle.text}>
            I am react native and node js developer
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default Profile;
