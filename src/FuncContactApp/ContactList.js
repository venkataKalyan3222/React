import React from 'react'

let ContactList=(props)=> {
    // let {Contacts}=props;
    let selectContact=(event)=>{
        //   console.log(event.location.country)
        console.log(selectContact);
        
     }
    return (
        <div>
            {/* <pre>{JSON.stringify(props)}</pre> */}
            {/* <pre>{JSON.stringify(props.Contacts)}</pre> */}
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                        <table className='table table-hover table-success'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>country</th>
                                    <th>location</th>
                                </tr>
                            </thead>
                            {/* <h6>{JSON.stringify(props.Contacts)}</h6> */}
                            <tbody>
                                {props.Contacts.length>0?<>
                                    {props.Contacts.map((event)=>{
                                        // const {name,email,location}=event
                                        console.log(event)
                                      return(
                                          <tr onClick={selectContact.bind(event)}>
                                               <td>{event.name.first}</td>
                                               <td>{event.email}</td>
                                               <td>{event.location.country}</td>
                                               <td>{event.location.street.name}</td>
                                          </tr>
                                      )
                               })}
                               </>:null}
                             
                                
                                
                            </tbody>
                        </table>

                        
                    
                </div>
            </div>
        </div>
    )
}

export default ContactList;
