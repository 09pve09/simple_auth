import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
  form: formReducer
});

export default rootReducer;
