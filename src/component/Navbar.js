import React from "react";
class Navbar extends React.Component {
    render() { 
        return <div>
            <nav className="navbar navbar -dark bg-dark">
                {/* <a href="/home" className="navbar navbar-brand">React Example</a> */}
                <a href="/" class="link-secondary">React Example</a>
               

            </nav>
        </div>;
    }
}
 
export default Navbar;
