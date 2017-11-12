import _ from 'lodash';
import { FETCH_DATA } from '../actions';

export default function (state = {}, action){
  switch(action.type){
  case FETCH_DATA:
    return _.mapKeys(action.payload.data, 'name');
  default:
    console.log(action.type);
    return state;
  }
}
