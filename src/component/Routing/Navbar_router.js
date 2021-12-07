import React from "react";
import{Link} from "react-router-dom"
class Navbar_router extends React.Component {
    render() { 
        return <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/Navbar">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/Home">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Features">Features</Link>
      </li>
      <li classNames="nav-item">
        <Link className="nav-link" to="/Pricing">Pricing</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled">Disabled</Link>
      </li>
    </ul>
  </div>
</nav>
        </>;
    }
}
 
export default Navbar_router;