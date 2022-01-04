import React, { Component } from 'react'
import Axios from 'axios';
import ContactList from './ContactList';
import ContactCard from './ContactCard';
class ContactApp extends Component {
    constructor(props){
        super(props)
        this.state={
            Contacts:[],
            errmsg:null,
            SelectedContact:{},
        }
    }
    PullData=(event)=>{
       this.setState({
        SelectedContact:event
       })
    }

    componentDidMount=()=>{
        let url= "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
       Axios.get(url).then((response)=>{
        //    console.log(response.data)
        this.setState({Contacts:response.data})
       }).catch(()=>{})
      
    }
    render() {
        return (
            <div>
                <h1>ContactApp</h1>
               {/* <pre>{JSON.stringify(this.state)}</pre> */}
               {/* <pre>{JSON.stringify(this.state.SelectedContact)}</pre> */}
               <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                        <ContactList Contacts={this.state.Contacts} PullData={this.PullData} /> </div>
                            <div class="col-md-4">
                                {Object.keys(this.state.SelectedContact).length>0?<><ContactCard detailContact={this.state.SelectedContact}/></>:null}
                             
                            </div>
                        
                    </div>
                </div>
            
            </div>
        )
    }
}
export default ContactApp;
