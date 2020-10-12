import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { createLogger } from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';

import TaskReducer from "./TaskReducer"

// Redux reducer
const rootReducer = combineReducers({
    tasks: TaskReducer
});

// Middleware: Redux Persist Config
const persistConfig = {
    key: 'root',
    // Storage Method 
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: [
      'tasks',
    ],
    // Blacklist (Don't Save Specific Reducers)
    blacklist: [ ],
  };

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux Store
const store = createStore(
    persistedReducer,
    applyMiddleware(
      // createLogger(),
    ),
  );

// Middleware: Redux Persist Persister
let persistor = persistStore(store);



const getPersistor = () => persistor;
const getStore = () => store;
const getState = () => {
    return store.getState();
};

export { getStore, getState, getPersistor};