import React, { Component } from 'react';
import Phaser from 'phaser';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create }); // eslint-disable-line

    function preload() {
      game.load.image('logo', 'phaser.png');
    }

    function create() {
      const logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
      logo.anchor.setTo(0.5, 0.5);
    }
  }
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <div id='content' />
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
