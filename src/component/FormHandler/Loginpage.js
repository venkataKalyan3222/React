import React from "react";

class Loginpage extends React.Component {
    state={Email:'',
           Password:''}
    EmailHandler=(event)=>{
     this.setState({
         email:event.target.value
     })
    }
    PasswordHandler=(event)=>{
        this.setState({
            Password:event.target.value
        })
       }
    render() { 
        return <div>
                <div className="container mt-4">
    <div className="rows">
        <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                    {JSON.stringify(this.state)}
                    <div className="card-body">
                        <form>
                       <div className="form-group">
                           <input type="text" className="form-control"placeholder="Email" onChange={this.EmailHandler}/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control"placeholder="Password" onChange={this.PasswordHandler}/>
                       </div>
                       <div className="form-group">
                           <input type="button" className="btn btn-success form-control"
                           value="Login"/>
                           
                       </div>
                       
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</div>
        </div>;
    }
}
 
export default Loginpage;