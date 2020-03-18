import {connect} from 'react-redux';
import {getRoom} from './../actions/roomActions';
import Room from './../../screens/Room';
const mapStateToProps = state => ({
  room: state.room,
});

const mapDispatchToProps = dispatch => ({
  getRoom: id => dispatch(getRoom(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
