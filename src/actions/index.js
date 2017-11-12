import axios from 'axios';

export const FETCH_DATA = 'fetch_data';

const ROOT_URL = 'http://localhost:3004';


export function fetchData(){
  const request = axios.get(`${ROOT_URL}/timezones?`);
  return{
    type: FETCH_DATA,
    payload: request
  };
}
