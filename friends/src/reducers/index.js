import {
    LOGIN_START,
    LOGIN_SUCCESS,
    // LOGIN_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    FETCH_FRIEND_START,
    FETCH_FRIEND_SUCCESS,
    FETCH_FRIEND_FAILURE,
    DELETE_FRIEND_START,
    DELETE_FRIEND_SUCCESS,
    DELETE_FRIEND_FAILURE,

  
}
from '../actions';



const initialState = {
    error: '',
    fetchingData: false,
    loggingIn: false,
    savingFriend:false,
friends:[]
}




const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          error: '',
          loggingIn: true
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          error: ''
        };
        case FETCH_DATA_START:
          return {
            ...state,
            error: '',
            fetchingData: true
          };
        case FETCH_DATA_SUCCESS:
          return {
            ...state,
            fetchingData: false,
            friends: action.payload,
            error: ''
          };
          case FETCH_DATA_FAILURE:
            return {
              ...state,
              fetchingData: false,
              error: action.payload
            };
            case FETCH_FRIEND_START:
          return {
            ...state,
            error: '',
            savingFriend: true
          };
        case FETCH_FRIEND_SUCCESS:
          return {
            ...state,
            savingFriend: true,
            friends: action.payload,
            error: ''
          };
          case FETCH_FRIEND_FAILURE:
            return {
              ...state,
              savingFriend: false,
              error: action.payload
            };
            case DELETE_FRIEND_START:
              return {
                ...state,
                error: '',
                deleteFriend: true
              };
            case DELETE_FRIEND_SUCCESS:
              return {
                ...state,
                deleteFriend: false,
                friends: action.payload,
                error: ''
              };
              case DELETE_FRIEND_FAILURE:
                return {
                  ...state,
                  deleteFriend: false,
                  error: action.payload
                };
        default:
            return state;
        }
      };
      
      export default reducer;