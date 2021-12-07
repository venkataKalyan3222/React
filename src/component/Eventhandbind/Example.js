import React from "react";
class Example extends React.Component {
    constructor(props){
        super(props)
        this.message="Hello"
           //state={message:"Hello"}
    }
    gmHandler=()=>{
        this.setState({
            message:"Good morning"
        })
    }
    render() { 
        return <div>
        <div className="container mt-4">
            <div clasName="rows">
            <div className="col-md-6">
            <button type="button" class="btn btn-outline-success" onClick={this.gmHandler.bind(this,"Good morning")}>GM</button>
            <button type="button" class="btn btn-outline-success" onClick={this.gmHandler.bind(this,"Good Night")}>GN</button>
            </div>
            </div>
            </div>
        </div>;
    }
}
 
export default Example;