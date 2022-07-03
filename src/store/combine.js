import { combineReducers } from 'redux';
import counterReducer from './counter';
import modalReducer from './modal';
import sideReducer from './side';

const rootReducer = combineReducers({
  counter: counterReducer,
  modal: modalReducer,
  sidecounter: sideReducer
})

export default rootReducer;