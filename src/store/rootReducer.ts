import {api} from '@api/rtkApi';
import {authReducer} from '@features/auth';
import {combineReducers} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  auth: authReducer,
  [api.reducerPath]: api.reducer,
});

export {rootReducer};
