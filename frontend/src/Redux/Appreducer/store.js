

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as Appreducer } from "./reducer";
import {reducer as Authreducer} from "../Authreducer/reducer"
import {Flightreducer} from "../Flightreducer/reducer"
 import thunk from 'redux-thunk'
const rootreducer=combineReducers({Appreducer,Authreducer,Flightreducer})
const store=legacy_createStore(rootreducer,applyMiddleware(thunk))

export {store}