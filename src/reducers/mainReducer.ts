import { combineReducers } from 'redux';
import hello from './HelloWorldReducers';
const mainReducer = combineReducers({
    hello
});
export default mainReducer;
