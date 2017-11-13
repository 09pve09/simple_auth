import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  user: userReducer,
  data: dataReducer,
  form: formReducer
});

export default rootReducer;
