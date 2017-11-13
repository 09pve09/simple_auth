import axios from 'axios';

export const FETCH_DATA = 'fetch_data';
export const FETCH_USER = 'fetch_user';
export const CREATE_USER = 'create_user';
const ROOT_URL = 'http://localhost:3004';


export function fetchData(){
  return function(dispatch){
    axios
    .get(`${ROOT_URL}/timezones`)
    .then(res=>dispatch({type: FETCH_DATA, payload: res}));
  }
}


export function createUser(values, callback){
  return function(dispatch){
    axios
    .post(`${ROOT_URL}/users`, values)
    .then(res=>dispatch({type: CREATE_USER, payload: res}))
    .then(() => callback())
  }
}


export const fetchUser = () => dispatch => {
    axios
      .get(`${ROOT_URL}/current_user`)
      .then(res=>dispatch({type: FETCH_USER, payload: res.data}));
};
