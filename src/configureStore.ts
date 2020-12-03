import { createStore, applyMiddleware, compose } from 'redux';
import mainReducer from './reducers/mainReducer';
import thunkMiddleware from 'redux-thunk';
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(mainReducer,composeEnhancers(applyMiddleware (
    thunkMiddleware  // 允许我们 dispatch() 函数
)));
export {store};
