import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Goals from './Goals';
import Calendar from './Calendar';
import Home from './Home';
import User from './User';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar';
// import Login from './Login';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <div className="App">
              <Route exact path="/" render={() => <Home /> } />
              <Route path="/goals" render={() => <Goals /> } />
              {/* <Route path="/login" render={() => <Login /> } /> */}
              <Route path="/calendar" render={() => <Calendar /> } />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
