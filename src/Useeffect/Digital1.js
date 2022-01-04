import React,{useState,useEffect} from 'react'
let Digital1=()=> {
let [Currenttime, setCurrenttime] = useState(new Date().toLocaleTimeString())
   useEffect(()=>{
       setInterval(()=>{
        setCurrenttime(new Date().toLocaleTimeString())  
       },1000)
       return ()=>{
           console.log('Final')
       }
   },[])
    return (
        <>
        <h1>{Currenttime}</h1>
        </>
    )
}

export default Digital1

// import React,{useState,useEffect} from "react";
// let data=()=>{
//     let [currenTime,SetcurrentTime]=useState(new Date().toLocaleTimeString())
//    useEffect(()=>{
//        setInterval(()=>{
//         SetcurrentTime(new Date().toLocaleTimeString())
//        },1000)
//        return ()=>{
//         console.log('final')
//     }
//    },[])
   
//     return(
//         <div>
//             <h1>{currenTime}</h1>
//         </div>
//     )
// }
// export default data;