import { createStore, applyMiddleware  } from "redux";
import mainReducer from "./reducers/mainReducer";
import thunkMiddleware from "redux-thunk";
const store = createStore(mainReducer,applyMiddleware (
    thunkMiddleware  // 允许我们 dispatch() 函数
));
export default store;
