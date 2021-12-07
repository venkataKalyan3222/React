import React from "react";
class Example1 extends React.Component{
    state={emp_salary:30000}
    btnHandler=(value)=>{
        this.setState({
            emp_salary:30000+value
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.emp_salary}</h1>
                
          <button type="button" class="btn btn-success mr-4"onClick={this.btnHandler.bind(this,50000)}>HIKE-50000</button>
          <button type="button" class="btn btn-primary"onClick={this.btnHandler.bind(this,20000)}>HIKE-20000</button>
            </div>
        )
    }
}
export default Example1;