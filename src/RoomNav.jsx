import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import Room from './store/containers/room';

const RoomNav = createStackNavigator(
  {
    Room: {
      screen: Room,
    },
  },
  {
    // initialRouteName: 'Rooms',
    headerMode: 'none',
    activeColor: '#f0edf6',
    tabBarLabel: 'Content',
    inactiveColor: '#333333',
    // barStyle: {
    //   backgroundColor: "#B9D2B1",
    //   justifyContent: "center",
    //   alignItems: "center"
    // }
  },
);
export default createAppContainer(RoomNav);
