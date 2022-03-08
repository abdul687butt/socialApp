
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistCombineReducers } from 'redux-persist';

import { toastReducer, friendReducer, userReducer} from './reducer'
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user']
  };
  

  const rootReducer={   
        user:userReducer,
        friends:friendReducer,
        toast:toastReducer,
  }

  const persistCombinedReducers = persistCombineReducers(persistConfig, rootReducer);

  export const store = createStore(persistCombinedReducers, applyMiddleware(thunk));
  export const persistor = persistStore(store)