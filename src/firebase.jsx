import firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCsj_rQJ3c003Rq-nHnTk_x-OVCxJTnrnk',
  authDomain: 'eliapi9-97ae0.firebaseapp.com',
  databaseURL: 'https://eliapi9-97ae0.firebaseio.com',
  projectId: 'eliapi9-97ae0',
  storageBucket: 'eliapi9-97ae0.appspot.com',
  messagingSenderId: '86309274060',
  appId: '1:86309274060:web:8c50091fa9d2be92d49d69',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
