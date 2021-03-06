import {connect} from 'react-redux';
import {currentUser} from './../actions/userActions';
import AuthLoadingScreen from './../../AuthLoadingScreen';
const mapStateToProps = state => ({
  user: state.user,
  room: state.room,
});

const mapDispatchToProps = dispatch => ({
  currentUser: () => dispatch(currentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);
