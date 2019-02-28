import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';


const intialState = {};

const store = createStore(
  rootReducer,
  intialState,
  composeWithDevTools(applyMiddleware(thunk)),
);


export default store;
