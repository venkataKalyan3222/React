import React from 'react'
import Message1 from './Message1'
import Counter from '../ReactRedux/Counter'
import {Provider} from 'react-redux'
// import {store} from './Redux Level/Store'
import {store}from '../Redux/store'
// import {rootReducer} from '../Redux/rootReducer'
import Digital1 from '../Useeffect/Digital1'

let App=()=> {
    return (
        <>  
           <Provider store={store}>
            < Message1/>
            < Counter/>
            {/* <rootReducer/> */}
           </Provider>
           <Digital1/>
        </>
    )
}

export default App
