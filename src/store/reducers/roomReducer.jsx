import produce from 'immer';
const initialState = {
  roomName: '',
  roomDesc: '',
  rooms: [],
  isLoading: true,
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
        return;
      case 'ADD_ROOM_FAILURE':
        console.log(action);
        return;
      case 'GET_ROOM_INIT':
        draft.isLoading = true;
        return;
      case 'GET_ROOM_SUCCESS':
        console.log(action);
        draft.rooms = action.payload;
        draft.isLoading = false;
        return;
    }
  });

export default roomReducer;
