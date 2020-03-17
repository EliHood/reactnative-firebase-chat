import {connect} from 'react-redux';
import {addRoomDesc, initAddRoom} from './../actions/roomActions';
import AddRoomDesc from './../../flows/roomflow/AddRoomDesc';
const mapStateToProps = state => ({
  room: state.room,
});

const mapDispatchToProps = dispatch => ({
  addRoomDesc: desc => dispatch(addRoomDesc(desc)),
  initAddRoom: (data, history) => dispatch(initAddRoom(data, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRoomDesc);
