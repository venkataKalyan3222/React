import React from "react";
class Product extends React.Component {
    state={counter:0}
    IncrHandler=()=>{
       this.setState({
        counter:this.state.counter+1
       })
    }
    DecrHandler=()=>{
        this.setState({
         counter:this.state.counter-1
        })
     }
    render() { 
        return <div>
            <div className="container mt-4">
            <div clasName="rows">
            <div className="col-md-6">
            <div className="card">
            <div className="card-header">QTY:{this.state.counter}
             </div>
             <div classsName="card-body">
             <button type="button" class="btn btn-primary mr-3" onClick={this.DecrHandler}>DECR</button>
             <button type="button" class="btn btn-outline-success" onClick={this.IncrHandler} >INCR</button>   
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>;
    }
}
 
export default Product;
