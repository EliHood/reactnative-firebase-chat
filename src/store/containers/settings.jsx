import {connect} from 'react-redux';
import {logOut} from './../actions/userActions';
import Setting from './../../screens/Setting';

const mapDispatchToProps = dispatch => ({
  logOut: navigation => dispatch(logOut(navigation)),
});
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
