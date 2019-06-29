// import axios from 'axios';
import { authenticator } from '../utils/authenticator';
// import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return authenticator()
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(err => console.log(err.response));
};

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  authenticator()
    .get('http://localhost:5000/api/friends')
    .then(res => { 
        console.log("actions log :", res.data)
 dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response.data.error });
    });
};

export const FETCH_FRIEND_START = 'FETCH_FRIEND_START';
export const FETCH_FRIEND_SUCCESS = 'FETCH_FRIEND_SUCCESS';
export const FETCH_FRIEND_FAILURE = 'FETCH_FRIEND_FAILURE';
export const getFriend = (friend) => dispatch => {
    dispatch({ type: FETCH_FRIEND_START });
    authenticator()
        .post("http://localhost:5000/api/friends", friend)
        .get(`http://localhost:5000/api/friends/${friend.id}`)
        .put(`http://localhost:5000/api/friends/${friend.id}`)
        .then(res => { 
            console.log("actions log for adding a friend :", res.data)
     dispatch({ type: FETCH_FRIEND_SUCCESS, payload: res.data});
        })
        .catch(err => {
          console.log(err.response);
          dispatch({ type: FETCH_FRIEND_FAILURE, payload: err.response.data.error });
        });
    };


    export const DELETE_FRIEND_START = 'DELETE_FRIEND_START';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE';
export const deleteFriend = (id) => dispatch => {
  
    dispatch({ type: DELETE_FRIEND_START });
    authenticator()
        .delete(`http://localhost:5000/api/friends/${id}`)
        .then(res => { 
            console.log("actions log :",res.data)
            
     dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data});
        })
        .catch(err => {
          console.log(err.response);
          dispatch({ type: DELETE_FRIEND_FAILURE, payload: err.response.data.error });
        });
    };