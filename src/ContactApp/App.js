import React from 'react'
import Navbar from '../ContactApp/Navbar'
import ContactApp from '../ContactApp/ContactApp'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='contact' element={<ContactApp/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App
