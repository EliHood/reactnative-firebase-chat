import React, {Component, Fragment} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {Subheading} from 'react-native-paper';
import {Button} from 'react-native-paper';

export default class Setting extends Component {
  state = {};
  logOut = () => {
    this.props.logOut(this.props.navigation);
  };

  render() {
    return (
      <View style={{flex: 1, margin: 20}}>
        <Subheading> Settings </Subheading>
        <Button
          style={{marginTop: 40}}
          icon="logout"
          mode="contained"
          onPress={this.logOut}>
          Log-Out
        </Button>
      </View>
    );
  }
}
