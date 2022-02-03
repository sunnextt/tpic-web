import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const enhancer = compose(applyMiddleware(thunk));

const store = configureStore({ reducer: rootReducer, enhancer });

export default store;
