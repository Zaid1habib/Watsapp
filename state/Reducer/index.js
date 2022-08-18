import {combineReducers} from 'redux';
// import reducer from "./Reducer"
import reducer from './Reducer';
import SearchReducer from './SearchReducer';
const Reducer = combineReducers({
  ShowModal: reducer,
  Search: SearchReducer,
});

export default Reducer;
