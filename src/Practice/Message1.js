import React from 'react'
import {GmAction,GnAction} from './Redux Level/Message/Message.action'
import {useDispatch,useSelector} from 'react-redux'
let Message1=()=> {
    // let message='Hello';
    let dispatch= useDispatch()
    let message=useSelector((state)=>{
        return state;
    })
    let GmHandler=()=>{
        dispatch(GmAction())
        console.log('Test 1')
    }
    let GnHandler=()=>{
        dispatch(GnAction())
        console.log('Test 2')
    }
    return (
        <>
            <h1>message:{message.message} </h1>
            <pre>{JSON.stringify(message.message)}</pre>
            <button className="btn btn-success mr-2"onClick={GmHandler}>GM</button>
            <button className="btn btn-primary"onClick={GnHandler}>GN</button>
        </>
    )
}

export default Message1
