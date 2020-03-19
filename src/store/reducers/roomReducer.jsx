import produce from 'immer';
const initialState = {
  roomName: '',
  roomDesc: '',
  roomKey: '',
  rooms: [],
  isLoading: true,
  room: {},
};

const roomReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'ADD_ROOM_NAME':
        draft.roomName = action.name;
        return;
      case 'ADD_ROOM_DESC':
        draft.roomDesc = action.desc;
        return;
      // upon submit, loading spinner will show, after success loading will stop
      case 'ADD_ROOM_SUCCESS':
        console.log(action);
        draft.roomName = '';
        draft.roomDesc = '';
        draft.roomKey = action.payload.path;
        return;
      case 'ADD_ROOM_FAILURE':
        console.log(action);
        return;
      case 'GET_ROOMS_INIT':
        draft.isLoading = true;
        return;
      case 'ADD_MESSAGE_SUCCESS':
        console.log(action);
        return;
      case 'GET_ROOMS_SUCCESS':
        console.log(action);
        draft.rooms = action.payload;
        draft.isLoading = false;
        return;
      case 'GET_ROOM_INIT':
        console.log(action);
        draft.isLoading = true;
        return;
      case 'GET_ROOM_SUCCESS':
        console.log(action);
        draft.room = action.payload;
        draft.isLoading = false;
        return;
    }
  });

export default roomReducer;
