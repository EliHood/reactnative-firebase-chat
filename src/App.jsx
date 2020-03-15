/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  DefaultTheme,
  Provider as PaperProvider,
  Appbar,
} from 'react-native-paper';
import Nav from './Nav';
import {Provider} from 'react-redux';
import {store} from './store/store';
const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: '#333',
    accent: '#B9D2B1',
  },
  underlineColor: 'transparent',
};
class App extends Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <Provider store={store}>
          <Nav />
        </Provider>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
