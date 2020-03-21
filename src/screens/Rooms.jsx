import React, {useEffect, Fragment} from 'react';
import {View, ActivityIndicator, Text, StyleSheet} from 'react-native';
import {Subheading, Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
function Rooms(props) {
  useEffect(() => {
    props.getRooms();
  }, []);
  console.log(props.room.rooms);
  return (
    <Fragment>
      <View style={{margin: 20}}>
        <Subheading>Rooms</Subheading>
      </View>
      <View style={{flex: 1, marginTop: 40}}>
        {props.room.isLoading ? (
          <ActivityIndicator />
        ) : (
          <Fragment>
            {props.room.rooms.length > 0 ? (
              props.room.rooms.map((room, key) => (
                <Fragment key={key}>
                  <Button
                    onPress={() =>
                      props.navigation.navigate('Room', {
                        params: {roomKey: room.key},
                      })
                    }
                    icon="plus">
                    {room.roomName}
                  </Button>
                </Fragment>
              ))
            ) : (
              <Text style={{textAlign: 'center'}}>No Rooms Yet</Text>
            )}
          </Fragment>
        )}
      </View>
    </Fragment>
  );
}

export default Rooms;
