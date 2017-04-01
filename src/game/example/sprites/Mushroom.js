import Phaser from 'phaser';

export default class extends Phaser.Sprite {
  constructor({ game, x, y, asset }) {
    super(game, x, y, asset);
  }

  update() {
    this.angle += 1;
  }
}
