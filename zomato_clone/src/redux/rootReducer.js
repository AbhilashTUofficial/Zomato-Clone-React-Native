import {combineReducers} from 'redux';
import restaurantReducer from './Restaurant/restaurant-reducers';

const rootReducer = combineReducers({
  data: restaurantReducer,
});

export default rootReducer;
