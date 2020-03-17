import React, {Fragment} from 'react';
import {TextInput, HelperText, Subheading} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {withNavigation} from 'react-navigation';
import RoomViewHoc from './../../hoc/RoomViewHoc';
function AddRoomName(props) {
  const [roomName, setRoomname] = React.useState('');
  return (
    <Fragment>
      <Subheading style={styles.header}>Add Room Name</Subheading>
      <TextInput
        style={styles.textField}
        name="roomName"
        label="Enter Room Name"
        value={props.room.roomName}
        error={null}
        autoCapitalize="none"
        onChangeText={name => props.addRoomName(name)}
      />
      <Button
        style={{marginTop: 40}}
        compact={true}
        mode="flat"
        onPress={() => props.navigation.navigate('AddRoomDesc')}>
        Proceed
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
export default RoomViewHoc(AddRoomName);
