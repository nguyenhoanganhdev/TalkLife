import { persistCombineReducers } from 'redux-persist';
import messagesReducer from './messageHandler/reducers';
import { authReducer, categoriesReducer } from './reqres/reducers';
import { reduxStorage } from './storage';

const reducers = {
  auth: authReducer,
  messages: messagesReducer,
  categories: categoriesReducer,
};

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  // There is an issue in the source code of redux-persist (default setTimeout does not cleaning)
  timeout: undefined,
  whitelist: [''],
};

// Setup Reducers
export const persistedRootReducer = persistCombineReducers(persistConfig, reducers);

export type RootState = ReturnType<typeof persistedRootReducer>;

export default persistedRootReducer;
