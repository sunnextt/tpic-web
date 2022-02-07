import { combineReducers } from 'redux';
import authReducer from '../slice/AuthSlice';
import messageReducer from '../slice/MessageSlice';
import applicationReducer from '../slice/applicationDataSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  application: applicationReducer,
});

export default rootReducer;
