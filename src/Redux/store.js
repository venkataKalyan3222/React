import {Counterreducer} from './Counter/Counter.reducer'
import{createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
let store=createStore(Counterreducer,composeWithDevTools());
// let store=createStore(rootReducer,composeWithDevTools());
export {store}