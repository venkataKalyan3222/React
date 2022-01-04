import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import ContactApp from "./Contact/ContactApp";
import Navbar from './Contact/Navbar'
import Login from "./component/Basics/Login";
import Digital from "./component/Basics/Digital";
import Sms from "./component/Basics/Sms";
import Login1 from "./component/Basics/Login1"
import Login2 from "./component/Basics/Login2";
import Message from "./React Hooks/Message";
import Message1 from "./React Hooks/Message1";
import Counter from './React Hooks/Counter';
import CounterObj from "./React Hooks/CounterObj";
import Message3 from "./component/Message3";

class App extends React.Component {
    render() { 
        return <>
            <Router>
                <Navbar/>
            <Routes>
                <Route path="contact" element={<ContactApp/>}/>
                <Route path="Login" element={<Login/>}/>
                <Route path="digital" element={<Digital/>}/>
                <Route path='Sms' element={<Sms/>}/>
                <Route path='Login1'element={<Login1/>}/>
                <Route path='Login2'element={<Login2/>}/>
                <Route path='message' element={<Message/>}/>
                <Route path='Message1'element={<Message1/>}/>
                <Route path='counter' element={<Counter/>}/>
                <Route path='counterobj'element={<CounterObj/>}/>
                <Route path='message3'element={<Message3/>}/>
                
            </Routes>
            </Router>
        </>
    }
}
 
export default App;