import React from 'react';
import logo from './logo.svg';
import { Questions } from './features/demoTable/Questions';
import { Login } from './features/Login/Login';
import { Home } from './features/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
      </div>
    </Router>

  );
}

export default App;
