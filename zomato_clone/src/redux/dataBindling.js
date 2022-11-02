import {createStore, combineReducers} from 'redux';
import ItemReducer from './reducers/itemReducer';

//! Bind to reducers
const rootReducer = combineReducers({
  items: ItemReducer,
});

export const data = createStore(rootReducer);
