import { createStore, combineReducers,applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import toastReducer from './reducers/toastReducer';
const rootReducer = combineReducers({
    toast:toastReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
