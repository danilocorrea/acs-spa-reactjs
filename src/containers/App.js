import React, { Component } from 'react';
import logo from '../resources/images/logo.svg';
import './App.css';

// import Login from './Login'
import WebcamCapture from '../components/WebcamCapture'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/containers/App.js</code> and save to reload!!!
        </p>
        <WebcamCapture/>
      </div>
    );
  }
}

export default App;
