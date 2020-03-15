import firebaseApp from './../../firebase';
export const initRegister = (user, history) => {
  return dispatch => {
    console.log('hii', user);
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(user.email.trim(), user.password)
      .then(data => {
        dispatch({type: 'SIGNUP_SUCCESS', payload: data});
        history.navigate('App');
      })
      .catch(err => {
        alert(err);
        dispatch({type: 'SIGNUP_ERROR', err});
      });
  };
};

export const initLogin = (user, history) => {
  return dispatch => {
    dispatch({type: 'SIGNIN_INIT'});
    console.log('hii login', user);
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(user.email.trim(), user.password)
      .then(data => {
        dispatch({type: 'SIGNIN_SUCCESS', payload: data});
        history.navigate('App');
      })
      .catch(err => {
        alert(err);
        dispatch({type: 'SIGNIN_ERROR', err});
      });
  };
};

export const currentUser = () => {
  return dispatch => {
    dispatch({type: 'CURRENT_USER_INIT'});
    const currentUser = firebaseApp.auth().currentUser;
    console.log(currentUser);
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({type: 'CURRENT_USER_SUCCESS', payload: user.providerData[0]});
      } else {
        dispatch({type: 'CURRENT_USER_FAILURE'});
      }
    });
  };
};
