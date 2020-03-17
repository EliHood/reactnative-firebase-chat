import React, {Fragment} from 'react';
import {Button, Subheading, TextInput} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import RoomViewHoc from './../../hoc/RoomViewHoc';
function AddRoomDescription(props) {
  console.log(props);
  const addRoom = () => {
    const data = {
      roomName: props.room.roomName,
      roomDesc: props.room.roomDesc,
    };
    props.initAddRoom(data, props.navigation);
  };
  return (
    <Fragment>
      <Subheading style={styles.header}>Add Room Description</Subheading>
      <TextInput
        style={styles.textField}
        name="roomNameDescription"
        label="Enter Room Description"
        value={props.room.roomDesc}
        error={null}
        autoCapitalize="none"
        onChangeText={desc => props.addRoomDesc(desc)}
      />
      <Button
        style={{marginTop: 40}}
        compact={true}
        mode="flat"
        onPress={addRoom}>
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
