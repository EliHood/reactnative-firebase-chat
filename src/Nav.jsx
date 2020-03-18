import React from 'react';
import {createAppContainer} from 'react-navigation';
import AuthLoadingScreen from './store/containers/authloadingscreen';
import UnAuthNavigation from './UnauthenticatedNav';
import AppNavigator from './AuthenticatedNav';
import RoomNav from './RoomNav';
import {createStackNavigator} from 'react-navigation-stack';
import AddRoomFlow from './AddRoomFlow';
export default createAppContainer(
  createStackNavigator(
    {
      AuthLoading: {
        screen: AuthLoadingScreen,
      },
      App: AppNavigator,
      Auth: UnAuthNavigation,
      AddRoomFlow: AddRoomFlow,
      Room: RoomNav,
    },
    {
      initialRouteName: 'AuthLoading',
      headerMode: 'none',
    },
  ),
);
