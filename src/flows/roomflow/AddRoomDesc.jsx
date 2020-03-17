import React, {Fragment} from 'react';
import {Button, Subheading, TextInput} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import RoomViewHoc from './../../hoc/RoomViewHoc';
function AddRoomDescription(props) {
  return (
    <Fragment>
      <Subheading style={styles.header}>Add Room Description</Subheading>
      <TextInput
        style={styles.textField}
        name="roomNameDescription"
        label="Enter Room Description"
        value={null}
        error={null}
        autoCapitalize="none"
        onChangeText={null}
      />
      <Button
        style={{marginTop: 40}}
        compact={true}
        mode="flat"
        onPress={() => props.navigation.navigate('Room')}>
        Continue
      </Button>
    </Fragment>
  );
}
const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    fontSize: 25,
    marginTop: 0,
  },
  form: {
    padding: 20,
  },
  textField: {
    backgroundColor: 'transparent',
    marginTop: 50,
  },
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
export default RoomViewHoc(AddRoomDescription);
