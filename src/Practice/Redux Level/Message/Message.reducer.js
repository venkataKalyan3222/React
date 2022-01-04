import {GM,GN} from './Message.action'
let initialstate={message:'Hello.....How r u'}
let Messagereducer=(state=initialstate,action)=>{
    switch(action.type){
      case GM:
          return {message:'Good morning'}
      case GN:
          return {message:'Good night'}  
        default:
            return state    
    }
}
export {Messagereducer}