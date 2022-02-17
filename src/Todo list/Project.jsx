import React, { useState } from "react";
import "../Todo list/aha.css"
const Project=()=>{
    const initialvalue={
        name:'',
        email:'',
        number:'',
        project_name:'',
        task_description:'',
        start_date:'',
        end_date:'',
        status:'',
     }
     let [Inputvalues,setInputvalues]=useState(initialvalue)
    return(
        <>
        <h1 className="text-center">To Do List</h1>
            <div className="container">
            <div className="row-mt-3">
            <div className="col-md-4">
                <form>
                  <input type="text" placeholder="Enter ur Name" name="name" className="form-control"/><br/>
                  
                  
                  <input type="text" placeholder="Enter a valid Email id" name="email" className="form-control"/>
                  
                  <input type="text" placeholder="Enter a valid mobile Number" name="number"className="form-control" />
                  <input type="text" placeholder="Enter project name" name="project_name" className="form-control"/><br/>
                  <input type="text" placeholder="Enter task description" name="task_description" className="form-control"/><br/>
                  <input type="date" placeholder="Enter ur start_date" name="start_date" className="form-control"/><br/>
                  <input type="date" placeholder="Enter ur end_date" name="end_date" className="form-control"/>
                  </div>
                   
                <form/>
                
            </div>
            </div>
           
           
        </>
    )
}
export default Project;