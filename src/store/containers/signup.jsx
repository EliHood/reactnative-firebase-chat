import {connect} from 'react-redux';
import {initRegister} from './../actions/userActions';
import SignUp from './../../screens/SignUp';
const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  initRegister: (user, history) => dispatch(initRegister(user, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
