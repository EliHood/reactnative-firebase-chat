import React from 'react';
import {Button} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
function AddRoom(props) {
  return (
    <View style={{flex: 1, marginTop: 60}}>
      <Button
        onPress={() => props.navigation.navigate('AddRoomName')}
        icon="plus">
        Add A Room
      </Button>
    </View>
  );
}
export default withNavigation(AddRoom);
