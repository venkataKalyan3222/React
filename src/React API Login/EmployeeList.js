import React,{useState,useEffect} from 'react'
import axios from 'axios'

let EmployeeList=()=> {
    const url="http://localhost:3002/employee";
    const[emplist,setemplist]=useState([])
    return (
        <div>
            <h1>Add Employee</h1>
            <table>
                <tr>
                    <th>Employee Name</th>
                    <td>
                        <input type="text" className='inputbox'/>
                    </td>
                </tr>
                <tr>
                    <th>mobile</th>
                    <td>
                        <input type="text" className='inputbox'/>
                    </td>
                </tr>
                <tr>
                    <th>department</th>
                    <td>
                        <input type="text" className='inputbox'/>
                    </td>
                </tr>
                <tr>
                    <th>salary</th>
                    <td>
                        <input type="text" className='inputbox'/>
                    </td>
                </tr>
                <tr>
                    <th>salary</th>
                    <td>
                        <button>Save Employee</button>
                    </td>
                </tr>
            </table>

        </div>
    )
}

export default EmployeeList;
