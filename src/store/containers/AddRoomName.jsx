import {connect} from 'react-redux';
import {addRoomName} from './../actions/roomActions';
import AddRoomName from './../../flows/roomflow/AddRoomName';
const mapStateToProps = state => ({
  room: state.room,
});

const mapDispatchToProps = dispatch => ({
  addRoomName: name => dispatch(addRoomName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRoomName);
