import Axios from 'axios'
import React from 'react'
import {useState,useEffect}from 'react'
import ContactList from '../FuncContactApp/ContactList';
import ContactCard from '../FuncContactApp/ContactCard'

let ContactApp=()=>{
    let [Contact,setContact]=useState([])
    let [selectContact,setSelectContact]=useState({})
    useEffect(()=>{
        Axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist")
        .then((response)=>{
            // console.log(response.data)
            setContact(response.data)
        }).catch(()=>{})
    },[])
    const selectHandle=(event)=>{
        setSelectContact({selectContact:event})
    }
    console.log(Contact)
    return (
        <div>
            <h4>Contact App</h4>
            <pre>{JSON.stringify(Contact)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        {/* <h1>hello</h1> */}
                    <ContactList Contacts={Contact} selectHandle={selectHandle}/>
                    </div>
                        <div className="col-md-4"></div>
                        {Object.keys(selectContact).length>0?<> <ContactCard detailContact={selectContact}/></>:null}
                              
                        
                    
                </div>
            </div>
        </div>
    )
}

export default ContactApp;
