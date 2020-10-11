import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from 'react-native'
import TaskReducer from "./TaskReducer"



const rootReducer = combineReducers({
    tasks: TaskReducer
});

const store = createStore(rootReducer); 
const getStore = () => store;
const getState = () => {
    return store.getState();
};

export { getStore,    getState,};
export default { getStore,    getState,}