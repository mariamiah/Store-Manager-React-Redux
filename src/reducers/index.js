import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import FetchProductsReducer from './FetchProductsReducer';

export default combineReducers({
  LoginReducer,
  FetchProductsReducer,
});
