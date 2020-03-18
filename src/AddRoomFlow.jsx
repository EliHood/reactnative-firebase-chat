import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import AddRoomName from './store/containers/AddRoomName';
import AddRoomDesc from './store/containers/AddRoomDesc';
// this a screen flow
const AddRoomFlow = createStackNavigator(
  {
    AddRoomName: {
      screen: AddRoomName,
    },
    AddRoomDesc: {
      screen: AddRoomDesc,
    },
  },
  {
    headerMode: 'none',
    activeColor: '#f0edf6',
    tabBarLabel: 'Content',
    inactiveColor: '#333333',
  },
);
export default createAppContainer(AddRoomFlow);
