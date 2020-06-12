import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

import Navbar from './Components/Layout/Navbar';
import User from './Components/users/User';
import Alert from './Components/Layout/Alert';

import Home from './Components/Pages/Home'
import About from './Components/Pages/About';
import notFound from './Components/Pages/notFound';

import GithubState from './Context/github/Githubstate';
import AlertState from './Context/Alert/AlertState';


const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
        <div className="App">
          <Navbar />
          <div className="wrapper">
              <Alert/>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/user/:login' component={User}/>
                <Route component={notFound}/>
              </Switch>
          </div>
        </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;