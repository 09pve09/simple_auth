import axios from 'axios';

export const FETCH_DATA = 'fetch_data';
export const CREATE_USER = 'create_user';
const ROOT_URL = 'http://localhost:3004';


export function fetchData(){
  const request = axios.get(`${ROOT_URL}/timezones`);

  return{
    type: FETCH_DATA,
    payload: request
  };
}


export function createUser(values, callback){
  const request = axios.post(`${ROOT_URL}/users`, values)
    .then(() => callback());

  return{
    type: CREATE_USER,
    payload: request
  };
}
