import { FETCH_USER, AUTH_USER } from '../actions';
import _ from 'lodash';


export default function(state = null, action){
  switch (action.type){
    case FETCH_USER:
      // console.log(action.payload);
      return _.isEmpty(action.payload) ? false : action.payload;
    case AUTH_USER:
      // console.log('AUTH REDUCER says: ', action.payload);
      return action.payload;
    default:
      return state;
  }
}
