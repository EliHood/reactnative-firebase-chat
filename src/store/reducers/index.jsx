import {combineReducers} from 'redux';
import authReducer from './authReducer';
import roomReducer from './roomReducer';

export const rootReducer = combineReducers({
  user: authReducer,
  room: roomReducer,
});
