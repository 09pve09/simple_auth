import _ from 'lodash';
import { CREATE_USER, FIND_USER, LOGOUT_USER } from '../actions';


export default function (state = {}, action){
  switch(action.type){
  case CREATE_USER:
    // console.log(state);
    return 'lolo';
  case FIND_USER:
    // console.log('recieved FIND_USER in reducer');
    // console.log(action.payload[0]);
    // console.log(_.isEmpty(action.payload) ? true : action.payload[0]);
    return _.isEmpty(action.payload) ? true : action.payload[0];
  case LOGOUT_USER:
    // console.log('recieved LOGOUT_USER in reducer');
    return _.isEmpty(action.payload) ? true : 'smth went wrong';
  default:
    // console.log(action.type);
    return state;
  }
}
