import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Goals from './Goals';
import Calendar from './Calendar';
import Menubar from './Menubar.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/* <Menubar /> */}
          <h1 className="App-title">My OnTrack Calendar App</h1>
        </header>
        <p className="App-intro"></p>
        <Goals />
        <Calendar />
      </div>
    );
  }
}

export default App;
