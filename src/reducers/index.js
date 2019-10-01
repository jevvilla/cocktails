import { combineReducers } from 'redux';
import cocktailsReducer from './cocktails';

const rootReducer = combineReducers({
  cocktailsReducer,
});

export default rootReducer;
