import React from 'react';
import Home from './screens/Home';
import Icon from 'react-native-vector-icons/AntDesign';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Setting from './store/containers/settings';
import {Button} from 'react-native-paper';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import AddRoomName from './flows/roomflow/AddRoomName';
import Room from './screens/Room';
const AppNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" color={tintColor} size={24} />
        ),
      },
    },
    Rooms: {
      screen: Room,
      navigationOptions: () => {
        return {
          tabBarVisible: false,
          tabBarIcon: ({tintColor}) => (
            <Icon name="aliwangwang-o1" color={tintColor} size={24} />
          ),
        };
      },
    },
    Settings: {
      screen: Setting,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="setting" color={tintColor} size={24} />
        ),
      },
    },
  },

  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    tabBarLabel: 'Content',
    adaptive: false,
    inactiveColor: '#333333',
    barStyle: {
      backgroundColor: '#B9D2B1',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
);

export default createAppContainer(AppNavigator);
