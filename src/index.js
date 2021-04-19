import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './components/router'
import './index.css';
import App from './App';
import  {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(

    <Router>
        <App />
        <Routers/>
    </Router>,
  document.getElementById('root')
);


