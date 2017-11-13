import { FETCH_USER } from '../actions';
import _ from 'lodash';


export default function(state = null, action){
  switch (action.type){
    case FETCH_USER:
      console.log(action.payload);
      return _.isEmpty(action.payload) ? false : action.payload;
    default:
      return state;
  }
}
