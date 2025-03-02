import { createStore, combineReducers,applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import cashFlowReducer from './reducers/cashFlowReducer';
import toastReducer from './reducers/toastReducer';
const rootReducer = combineReducers({

    cashflows:cashFlowReducer,
    toast:toastReducer


});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
