import { combineReducers } from 'redux';
import authReducer from '../slice/AuthSlice';
import messageReducer from '../slice/MessageSlice';
import paymentReducer from '../slice/PaymentHistorySlice';
import applicationReducer from '../slice/applicationDataSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  paymentDetails: paymentReducer,
  application: applicationReducer,
});

export default rootReducer;
