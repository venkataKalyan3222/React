import React from "react";
// import Navbar from "../FuncContactApp/Navbar"
import ContactApp from '../FuncContactApp/ContactApp';
// import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
let App=()=>{
    return(
        <div>
              <h1>App Component</h1>
              <ContactApp/>
              {/* <Router>
                  <Navbar/>
                  <Routes>
                      <Route path='Contact' element={<ContactApp/>}/>
                  </Routes>
              </Router> */}
        </div>
    )
}
export default App;
