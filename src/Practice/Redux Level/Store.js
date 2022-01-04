import { createStore } from "redux";
import {messagereducer}from './Message/Message.reducer'
import {composeWithDevTools} from 'redux-devtools-extension'
let store=createStore(messagereducer,composeWithDevTools());
export {store}