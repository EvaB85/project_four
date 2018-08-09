import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import logo from './logo.svg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar'
import './App.css';
import Calendar from './Calendar';
import Goals from './Goals';
import Home from './Home';
import Navbar from './Navbar';
import User from './User';
// import Login from './Login';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/* <Menubar /> */}
          <h1 className="App-title">SeeGoal App</h1>
        </header>
        <p className="App-intro"></p>

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

        <Goals />
        <Calendar />
      </div>
    );
  }
}

export default App;
