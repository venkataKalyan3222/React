import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Pagination from "./Pagination"

function App() {
    let [data,setdata]=useState([]);
    let [perpage,setperpage]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{setdata(response.data);setperpage(response.data.slice(0,10))})
        .catch()
    },[])

    return (
        <div>
            {data.length>1?<div>
            {perpage.map(event=><div className='event'>{event.title}</div>)}<br/>
            <Pagination/>
            </div>:null}
            
           
        </div>
    )
}

export default App
