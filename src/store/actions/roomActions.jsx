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
        const key = childSnapshot._snapshot.key;
        childData.key = key;
        ourArr.push(childData);
      });
      dispatch({type: 'GET_ROOMS_SUCCESS', payload: ourArr});
    });
  };
};

export const getRoom = id => {
  return dispatch => {
    console.log(id);
    const roomRef = database().ref(`rooms/${id}`);
    roomRef.once('value').then(snapshot => {
      console.log(snapshot);
      dispatch({type: 'GET_ROOM_SUCCESS', payload: snapshot.val()});
    });
  };
};
