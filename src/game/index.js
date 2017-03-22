import 'p2';
import Phaser from 'phaser';

import BootState from './example/states/Boot';
import SplashState from './example/states/Splash';
import GameState from './example/states/Game';

import config from './config';

class Game extends Phaser.Game {
  constructor() {
    const docElement = document.documentElement;
    const width =
      docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth;
    const height =
      docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight;

    super(width, height, Phaser.CANVAS, 'game', null);

    this.state.add('Boot', BootState, false);
    this.state.add('Splash', SplashState, false);
    this.state.add('Game', GameState, false);

    this.state.start('Boot');
  }
}

export default Game;
