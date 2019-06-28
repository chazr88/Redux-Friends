import { LOGIN_START, FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../actions";

const initialState = {
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  error: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        loggingIn: true
      };
    }
    case FETCH_DATA_START: {
        console.log("Start" )
        return {
            ...state, 
            error: "",
            fetchingFriends: true
        };
    }
    case FETCH_DATA_SUCCESS: {
        return {
            ...state, 
            error: "",
            fetchingFriends: false,
            friends: action.payload
        };
    }
    case FETCH_DATA_FAILURE: {
        return {
            ...state, 
            error: action.payload
        }
    }
    default:
      return state;
  }
}

export default reducer;
