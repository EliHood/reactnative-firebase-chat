import React from 'react';
import Home from './screens/Home';
import Icon from 'react-native-vector-icons/AntDesign';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Setting from './store/containers/settings';
import {Button} from 'react-native-paper';
import {StyleSheet, View, Text, TextInput} from 'react-native';
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
        headerLeft: () => (
          <Text
            style={{paddingLeft: 20}}
            icon="logout"
            mode="contained"
            onPress={() => navigation.navigate('Settings')}>
            Settings
          </Text>
        ),
      }),
    },
    Settings: {
      screen: Setting,
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
