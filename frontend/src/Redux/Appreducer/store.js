

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as Appreducer } from "./reducer";
import {reducer as Authreducer} from "../Authreducer/reducer"
import {Flightreducer} from "../Flightreducer/reducer"
 
 import thunk from 'redux-thunk'
import { TitleReducer } from "../FlightCheckout/reducer";
const rootreducer=combineReducers({Appreducer,Authreducer,Flightreducer,TitleReducer})
const store=legacy_createStore(rootreducer,applyMiddleware(thunk))

export {store}