import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import FetchProductsReducer from './FetchProductsReducer';
import RegisterEmployeesReducer from './RegisterEmployeeReducer';

export default combineReducers({
  LoginReducer,
  FetchProductsReducer,
  RegisterEmployeesReducer,
});
