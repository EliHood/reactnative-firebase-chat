import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
export default function(WrappedComponent) {
  class RoomViewHoc extends Component {
    render() {
      return (
        <View style={{flex: 1, margin: 20}}>
          <WrappedComponent {...this.props} />
        </View>
      );
    }
  }
  return RoomViewHoc;
}
