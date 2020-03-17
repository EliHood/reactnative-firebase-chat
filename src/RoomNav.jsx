import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import AddRoomName from './flows/roomflow/AddRoomName';
import AddRoomDesc from './flows/roomflow/AddRoomDesc';
import Room from './screens/Room';
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
