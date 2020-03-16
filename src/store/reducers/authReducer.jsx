import produce from 'immer';
const initialState = {
  isAuthenticated: false,
  isLoading: true,
  currentUser: null,
  error: null,
};

const authReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // upon submit, loading spinner will show, after success loading will stop
      case 'SIGNUP_SUCCESS':
        console.log(action);
        draft.isLoading = true;
        draft.isAuthenticated = true;
        return;
      case 'SIGNUP_ERROR':
        console.log(action);
        return;
      case 'SIGNIN_INIT':
        console.log(action);
        draft.isLoading = true;
        return;
      case 'SIGNIN_SUCCESS':
        draft.isLoading = false;
        draft.isAuthenticated = true;
        return;
      case 'SIGNIN_FAILURE':
        console.log(action);
        draft.isAuthenticated = false;
        return;
      case 'CURRENT_USER_INIT':
        console.log(action);
        console.log('currentuser init');
        draft.isLoading = true;
        return;
      case 'CURRENT_USER_SUCCESS':
        console.log(action);
        draft.isLoading = false;
        draft.currentUser = action.payload;
        return;
      case 'CURRENT_USER_FAILURE':
        console.log('user failed');
        draft.isLoading = false;
        draft.currentUser = null;
        return;
      case 'SIGNOUT_SUCCESS':
        console.log(action);
        draft.currentUser = null;
        return;
      case 'SIGNOUT_FAILURE':
        console.log(action);
        return;
    }
  });

export default authReducer;
