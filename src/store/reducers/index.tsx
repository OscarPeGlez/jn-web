import { combineReducers } from 'redux';
import countReducer from './counter';

export const rootReducer = combineReducers({ countReducer });

export type RootState = ReturnType<typeof rootReducer>;
