import { combineReducers } from "redux";
import {Messagereducer}from '../Practice/Redux Level/Message/Message.reducer';
import { Counterreducer } from "./Counter/Counter.reducer";
let rootReducer=combineReducers({
     message:Messagereducer,
     counter:Counterreducer,
})
export{rootReducer}