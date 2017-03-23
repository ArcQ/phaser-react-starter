import Phaser from 'phaser';

export default class extends Phaser.Sprite {
  constructor({ game, x, y, asset }) {
    super(game, x, y, game.cache.getBitmapData(asset));
  }

  update() {
    this.angle += 1;
  }
}
