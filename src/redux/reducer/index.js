import { combineReducers } from 'redux';
import authReducer from '../slice/AuthSlice';
import messageReducer from '../slice/MessageSlice';


const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
});

export default rootReducer;
