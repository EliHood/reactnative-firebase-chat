import {connect} from 'react-redux';
import {initLogin} from './../actions/userActions';
import Login from './../../screens/Login';
const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  initLogin: (user, history) => dispatch(initLogin(user, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
