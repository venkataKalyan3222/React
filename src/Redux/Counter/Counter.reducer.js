import {INCR,DECR} from './Counter.action'
let initialCounter={Counter:0}
let Counterreducer=(state=initialCounter,action)=>{
       switch(action.type){
           case INCR:
               return {Counter:state.Counter+1}
           case DECR:
               return {Counter:state.Counter-1} 
           default:
               return state;   
       }
}
export {Counterreducer}