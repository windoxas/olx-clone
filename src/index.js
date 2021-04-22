import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Routers from './components/router'
import './index.css';
import App from './App';
import  {BrowserRouter as Router} from 'react-router-dom'
import {Context} from "./components/context";



function Apps() {

    const [counter, setCounter] = useState(0)
    const countUp = () => setCounter(counter + 1)
    const countDown = () => setCounter(counter - 1)

    const value = {
        counter,
        countUp,
        countDown
    }

    return(
        <Context.Provider value={value}>
            <Router>
                <App />
                <Routers/>
            </Router>
            </Context.Provider>
    )
}


ReactDOM.render(

  <Apps/>,document.getElementById('root')
);


