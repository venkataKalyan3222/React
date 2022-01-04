import React from 'react'
import {Incraction,Decraction} from '../Redux/Counter/Counter.action'
import {useDispatch,useSelector} from 'react-redux'


let Counter=()=> {
    // let Counter={Counter:0}
    let dispatch=useDispatch();
    let Counter=useSelector((state)=>{
        return state;
    })
    let IncHandler=()=>{
        dispatch(Incraction())
    }

    let DecHandler=()=>{
        dispatch(Decraction())
    }
    return (
        <>
            <h1>Counter:{Counter.Counter}</h1>
            {/* <pre>{JSON.stringify(x)}</pre> */}
            <button className='btn btn-warning mr-2'onClick={IncHandler}>INC</button>
            <button className='btn btn-success'onClick={DecHandler}>DEC</button>

        </>
    )
}

export default Counter;
