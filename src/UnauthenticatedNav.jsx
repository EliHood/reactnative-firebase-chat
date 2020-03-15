import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import SignUp from './store/containers/signup';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import Login from './store/containers/login';

const UnAuthNavigation = createStackNavigator(
  {
    Signup: {
      screen: SignUp,
      navigationOptions: () => ({
        title: `Back`,
        headerTitleStyle: {
          color: '#333',
          padding: 0,
          margin: 0,
        },
      }),
    },
    Login: {
      screen: Login,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: null,
  },
);
export default createAppContainer(UnAuthNavigation);
