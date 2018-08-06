import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Goals from './Goals';
import Calendar from './Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        TESTING code<code>src/App.js</code> and save to reload.
        </p>
        <Goals />
        <Calendar />
      </div>
    );
  }
}

export default App;
