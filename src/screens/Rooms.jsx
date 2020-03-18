import React, {useEffect, Fragment} from 'react';
import {View, ActivityIndicator, Text, StyleSheet} from 'react-native';
import {Subheading, Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
function Rooms(props) {
  useEffect(() => {
    props.getRooms();
  }, []);
  console.log(props.room);
  return (
    <Fragment>
      <View style={{margin: 20}}>
        <Subheading>Rooms</Subheading>
      </View>
      <View style={{flex: 1, marginTop: 40}}>
        {props.room.isLoading && props.room.rooms ? (
          <ActivityIndicator />
        ) : (
          <Fragment>
            {props.room.rooms.map((room, key) => (
              <Button
                onPress={() =>
                  props.navigation.navigate('Room', {
                    params: {roomKey: room.key},
                  })
                }
                icon="plus">
                {room.roomName}
              </Button>
            ))}
          </Fragment>
        )}
      </View>
    </Fragment>
  );
}

export default Rooms;
