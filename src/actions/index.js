import axios from 'axios';

export const FETCH_DATA = 'fetch_data';
export const FETCH_USER = 'fetch_user';
export const CREATE_USER = 'create_user';
export const FIND_USER = 'find_user';
export const AUTH_USER = 'auth_user';
export const LOGOUT_USER = 'logout_user';
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


export function findUser(values, callback){
  return function(dispatch){
    // console.log(`${ROOT_URL}/users?email=${values.email}&password=${values.password}`);
    axios
    .get(`${ROOT_URL}/users?email=${values.email}&password=${values.password}`)
    .then(res=>dispatch({type: FIND_USER, payload: res.data}))
    .then(()=>{ callback() })
  }
}

export function authUser(values, callback){
  return function(dispatch){
    // console.log('creating an auth action...');
    axios
    .post(`${ROOT_URL}/current_user`, values)
    .then(res=>dispatch({type: AUTH_USER, payload: res}))
    .then(()=>{ callback() })
  }
}


export function logoutUser(callback){
  return function(dispatch){
    // console.log('creating a logout action');
    axios
    .post(`${ROOT_URL}/current_user`, {})
    .then(res=>dispatch({type: LOGOUT_USER, payload: res}))
    .then(()=>{ callback() })
  }
}





//sds
