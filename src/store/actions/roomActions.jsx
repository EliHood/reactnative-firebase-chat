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
        console.log(data);
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
      const messages = [];
      snapshot.forEach(childSnapshot => {
        var childData = childSnapshot.val();
        const key = childSnapshot._snapshot.key;
        let message;
        console.log(childData.messages);
        for (var id in childData.messages) {
          // => do what you need
          message = childData.messages[id];
          messages.push(message);
        }

        console.log(ourArr);
        childData.key = key;
        childData.messages = messages;
        ourArr.push(childData);
      });
      dispatch({type: 'GET_ROOMS_SUCCESS', payload: ourArr});
    });
    roomRef.once('value').catch(err => {
      dispatch({type: 'GET_ROOMS_FAILURE', err});
    });
  };
};

export const getRoom = id => {
  return dispatch => {
    console.log(id);
    const roomRef = database().ref(`rooms/${id}`);
    dispatch({type: 'GET_ROOM_INIT'});
    const ourArr = [];
    let message;
    roomRef.once('value').then(snapshot => {
      const ourMessages = [];
      const messages = snapshot._snapshot.value.messages;
      console.log(messages);
      for (var mes in messages) {
        message = messages[mes];
        ourMessages.push(message);
      }
      const ourArr = snapshot.val();
      ourArr.messages = ourMessages;
      console.log(ourArr);

      // for (var owl in childData.val.) {
      //   // => do what you need
      //   message = childData.messages[owl];
      //   messages.push(message);
      // }
      dispatch({type: 'GET_ROOM_SUCCESS', payload: ourArr, key: id});
    });
  };
};

export const closeChat = () => {
  return dispatch => {
    database()
      .goOffline()
      .then(res => {
        console.log(res);
        dispatch({type: 'CHAT_CLOSE_SUCCESS'});
      });
  };
};

export const initAddMessage = (message, id) => {
  console.log(message, id);
  return dispatch => {
    console.log(message);
    const uid = auth().currentUser.uid;
    console.log(auth().currentUser._user);
    // Create a reference
    const roomRef = database().ref(`/rooms/${id}/messages`);
    roomRef
      .push(message)
      .then(data => {
        dispatch({type: 'ADD_MESSAGE_SUCCESS', payload: data});
      })
      .catch(err => {
        dispatch({type: 'ADD_MESSAGE_FAILURE', err: err});
      });
  };
};
