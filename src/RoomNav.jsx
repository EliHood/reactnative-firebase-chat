import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import AddRoomName from './store/containers/AddRoomName';
import AddRoomDesc from './store/containers/AddRoomDesc';
import Room from './screens/Room';
import Rooms from './store/containers/rooms';
const RoomNav = createStackNavigator(
  {
    AddRoomName: {
      screen: AddRoomName,
    },
    AddRoomDesc: {
      screen: AddRoomDesc,
    },
    Room: {
      screen: Room,
    },
  },
  {
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
