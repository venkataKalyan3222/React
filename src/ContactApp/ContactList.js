import React, { Component } from 'react'
 class ContactList extends Component {
    SelectedContact=(event)=>{
        // console.log(event.email)
        this.props.PullData(event)
    }
    render() {
        let {Contacts}=this.props;
       
        return (
            <div>
              
                {/* <h4>ContactList</h4> */}
                {/* <pre> {JSON.stringify(this.props)}</pre> */}
                {/* <pre> {JSON.stringify(Contacts)}</pre> */}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className='table table-hover table-success'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>country</th>
                                        <th>location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Contacts.length>0? <>
                                 {Contacts.map((event)=>{
                                       return(
                                           <tr onMouseOver={this.SelectedContact.bind(this,event)}>
                                               <td>{event.name.first}</td>
                                               <td>{event.email}</td>
                                               <td>{event.location.country}</td>
                                               <td>{event.location.street.name}</td>
                                           </tr>
                                       )

                                 })}
                                    </>
                                    :null}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        
            </div>
        )
    }
}

export default ContactList
