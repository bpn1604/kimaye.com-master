import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as AppReducer} from "./app/reducer";
import {reducer as CartReducer} from "./cart/reducer";
import thunk from "redux-thunk";


const rootReducer=combineReducers({AppReducer,CartReducer})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));