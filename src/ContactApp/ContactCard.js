import React, { Component } from 'react'
 class ContactCard extends Component {
    render() {
        let {detailContact}=this.props
        return (
            <div>
                <h4>ContactList</h4>
                {/* <pre>{JSON.stringify(this.props)}</pre> */}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <img src={detailContact.picture.large} alt='.'/>
                                </div>
                                    <div className="card-body">
                                        <ul className='list-group'>
                                            <li className='list-group-item'>
                                                {detailContact.name.first}
                                            </li>
                                            <li className='list-group-item'>
                                                {detailContact.email}
                                            </li>
                                            <li className='list-group-item'>
                                                {detailContact.location.state}
                                            </li>
                                            <li className='list-group-item'>
                                                {detailContact.dob.age}
                                            </li>
                                        </ul>
                                    </div>
                                  
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

            
        )
    }
}

export default ContactCard
