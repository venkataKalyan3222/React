import React from 'react'

let ContactCard=(props)=>{
    // console.log(props)
    return (
        <div>
            <pre>{JSON.stringify(props)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <img src={props.picture.large} alt='.' />
                            </div>
                                <div className="card-body">
                                  <ul className='form-group'>
                                      <li className='form-group-item'>
                                          {props.name.first}
                                      </li>
                                      <li className='form-group-item'>
                                          {props.email}
                                      </li>
                                      <li className='form-group-item'>
                                          {props.location.state}
                                      </li>
                                      <li className='form-group-item'>
                                          {props.dob.age}
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
export default ContactCard;
