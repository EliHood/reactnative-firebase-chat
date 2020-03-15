import React from 'react';
import {createAppContainer} from 'react-navigation';
import AuthLoadingScreen from './store/containers/authloadingscreen';
import UnAuthNavigation from './UnauthenticatedNav';
import AppNavigator from './AuthenticatedNav';
import {createStackNavigator} from 'react-navigation-stack';
export default createAppContainer(
  createStackNavigator(
    {
      AuthLoading: {
        screen: AuthLoadingScreen,
      },
      App: AppNavigator,
      Auth: UnAuthNavigation,
    },
    {
      initialRouteName: 'AuthLoading',
      headerMode: 'none',
    },
  ),
);
