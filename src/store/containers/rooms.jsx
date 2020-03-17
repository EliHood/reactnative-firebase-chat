import {connect} from 'react-redux';
import {getRooms} from './../actions/roomActions';
import Rooms from './../../screens/Rooms';
const mapStateToProps = state => ({
  room: state.room,
});

const mapDispatchToProps = dispatch => ({
  getRooms: () => dispatch(getRooms()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
