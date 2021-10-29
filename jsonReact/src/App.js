import React, { Component } from 'react';
import GetJSON from './components/GetJSON/GetJSON.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">JSON Data</h1>
        <GetJSON/>
        <br/>
      </div>
    );
  }
}

export default App;