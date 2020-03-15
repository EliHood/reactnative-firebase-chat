import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
export const store = createStoreWithMiddleware(rootReducer);
