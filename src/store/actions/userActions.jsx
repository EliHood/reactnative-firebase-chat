// import firebaseApp from './../../firebase';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';

export const initRegister = (user, history) => {
  return dispatch => {
    console.log('hii', user);
    auth()
      .createUserWithEmailAndPassword(user.email.trim(), user.password)
      .then(data => {
        console.log('ikk', user);
        storeData(data.user._user.uid);
        data.user.updateProfile({
          displayName: user.userName,
        });
        console.log(user.username);
        dispatch({type: 'SIGNUP_SUCCESS', payload: data});
        history.navigate('App');
      })
      .catch(error => {
        dispatch({type: 'SIGNUP_ERROR', error});
        alert(error.message);
        console.log(error);
      });
  };
};

const storeData = async userData => {
  try {
    await AsyncStorage.setItem('auth', userData);
  } catch (e) {
    // saving error
  }
};

const removeUserStorage = async () => {
  try {
    await AsyncStorage.removeItem('auth').then(value => {
      const data = JSON.stringify(value);
      return data;
    });
  } catch (e) {
    console.log(e);
  }
};

export const initLogin = (user, history) => {
  return dispatch => {
    dispatch({type: 'SIGNIN_INIT'});
    console.log('hii login', user);
    auth()
      .signInWithEmailAndPassword(user.email.trim(), user.password)
      .then(data => {
        console.log(data.user._user.uid);
        storeData(data.user._user.uid);
        dispatch({type: 'SIGNIN_SUCCESS', payload: data});
        history.navigate('Home');
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
    const currentUser = auth().currentUser;
    console.log(currentUser);
    auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({type: 'CURRENT_USER_SUCCESS', payload: user.providerData[0]});
      } else {
        dispatch({type: 'CURRENT_USER_FAILURE'});
      }
    });
  };
};

export const logOut = history => {
  return dispatch => {
    dispatch({type: 'SIGNOUT_INIT'});
    auth()
      .signOut()
      .then(data => {
        console.log(data);
        removeUserStorage();
        dispatch({type: 'SIGNOUT_SUCCESS'});
        history.navigate('Auth');
      })
      .catch(error => {
        dispatch({type: 'SIGNOUT_FAILURE', err: error});
      });
  };
};
