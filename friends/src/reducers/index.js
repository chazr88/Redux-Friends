import { LOGIN_START } from '../actions';

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
  }

function reducer(state = initialState, action) {
    switch (action.type){
    case LOGIN_START: {
        return {
          ...state,
          isLoggingIn: true
        };
      } 
      default:
        return state;
    }
}

  
  export default reducer;
  