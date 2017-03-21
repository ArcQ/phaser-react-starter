import React, { Component } from 'react';
import Phaser from 'phaser';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create, render: render }); // eslint-disable-line

    function preload() {
      game.load.image('img', 'assets/phaser.png');
    }

    function create() {
      const img = game.add.sprite(game.world.centerX, game.world.centerY, 'img');
      img.anchor.setTo(0.5, 0.5);
      game.time.advancedTiming = true;
    }

    function render() {
      game.debug.text(game.time.fps, 2, 14, '#00ff00');
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
