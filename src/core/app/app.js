import React, { Component } from 'react';
import startGame from 'game';
import logo from './logo.svg';
import './app.css';

startGame();

class App extends Component {
  componentDidMount() {
    console.log('startGame called');
    startGame();
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <canvas id='game' width='500' height='300'>
          Your browser is not a supported version, please upgrade to the latest chrome browser.
        </canvas>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
