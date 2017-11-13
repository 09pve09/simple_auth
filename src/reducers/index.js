import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';
import dataReducer from './dataReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  user: userReducer,
  data: dataReducer,
  form: formReducer,
  auth: authReducer
});

export default rootReducer;
