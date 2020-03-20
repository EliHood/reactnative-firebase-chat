import {connect} from 'react-redux';
import {getRoom, initAddMessage, closeChat} from './../actions/roomActions';
import Room from './../../screens/Room';
const mapStateToProps = state => ({
  room: state.room,
});

const mapDispatchToProps = dispatch => ({
  getRoom: id => dispatch(getRoom(id)),
  closeChat: () => dispatch(closeChat()),
  initAddMessage: (message, id) => dispatch(initAddMessage(message, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
