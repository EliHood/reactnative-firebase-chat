import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export const addRoomName = name => ({
  type: 'ADD_ROOM_NAME',
  name,
});

export const addRoomDesc = desc => ({
  type: 'ADD_ROOM_DESC',
  desc,
});

export const initAddRoom = (data, history) => {
  return dispatch => {
    const uid = auth().currentUser.uid;

    // Create a reference
    const roomRef = database().ref(`/rooms/`);
    console.log(roomRef);
    roomRef
      .push({
        roomName: data.roomName,
        roomDesc: data.roomDesc,
        createdBy: uid,
      })
      .then(data => {
        dispatch({type: 'ADD_ROOM_SUCCESS', payload: data});
        history.navigate('Rooms');
      })
      .catch(err => {
        dispatch({type: 'ADD_ROOM_FAILURE', err: err});
      });

    console.log(uid, data);
  };
};

export const getRooms = () => {
  return dispatch => {
    const roomRef = database().ref('rooms');
    roomRef.on('value', snapshot => {
      console.log(snapshot);
      const ourArr = [];
      snapshot.forEach(childSnapshot => {
        var childData = childSnapshot.val();
        ourArr.push(childData);
      });
      dispatch({type: 'GET_ROOM_SUCCESS', payload: ourArr});
    });
  };
};
