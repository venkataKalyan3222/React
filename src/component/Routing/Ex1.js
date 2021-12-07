import React from "react";
import {Link} from "react-router-dom";
class Ex1 extends React.Component {
    render() { 
        return <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/navbar">Navbar</Link>
  <button claclassNamess="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div clclassNameass="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/home">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/features">Features</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/pricing">Pricing</Link>
      </li>
      
    </ul>
  </div>
</nav>
        </div>;
    }
}
 
export default Ex1;

