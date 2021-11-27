import React from "react";


//  class ClassComp1  extends React.Component {
//     name='kalyan'
//     age=25
//     gender='male'
//     render() { 
//         return <div>
//             <h1>Employee name:{this.name}</h1>
//             <h1>Employee age:{this.age}</h1>
//             <h1>Employee gender:{this.gender}</h1>
            
//             <h1>hi all.is this ok</h1>
//         </div>
//     }
// }
 function ClassComp1(){
    let name='kalyan'
    let age=25
    let gender='male'
     return( <div>
         <h1>Employee name:{name}</h1>
         <h1>Employee age:{age}</h1>
         <h1>Employee gender:{gender}</h1>
         <h1> hi all</h1>
     </div>
     )

     
 }
export default ClassComp1;