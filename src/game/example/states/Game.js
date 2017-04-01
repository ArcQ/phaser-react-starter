/* globals __DEV__ */
import Phaser from 'phaser';
import { runIfDev } from 'game/utils';
// import Mushroom from '../sprites/Mushroom';

function addMushroom(game, x, y) {
  // const mushroom = new Mushroom({ game, asset: 'key', x, y });
  const mushroom = new Phaser.Sprite(game, x, y, 'mushroom');
  console.log(mushroom);
  game.add.existing(mushroom);
  return mushroom;
}

let count = 0;

export default class extends Phaser.State {
  init() {}
  preload() {
    const image = new Image();
    image.src = 'assets/images/Mushroom.svg';
    const imgsvg = this.game.make.bitmapData(100, 100);
    imgsvg.ctx.drawImage(image, 0, 0, 100, 100);
    this.game.cache.addBitmapData('key', imgsvg);
  }

  create() {
    const bannerText = 'Phaser + ES6 + Webpack';
    const banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText);
    banner.font = 'Bangers';
    banner.padding.set(10, 16);
    banner.fontSize = 40;
    banner.fill = '#77BFA3';
    banner.smoothed = false;
    banner.anchor.setTo(0.5);
    this.game.time.advancedTiming = true;
    this.mushroom = addMushroom(this.game, this.world.centerX, this.world.centerY);
  }

  update() {
    if (this.input.activePointer.isDown) {
      addMushroom(this.game, this.input.activePointer.x, this.input.activePointer.y);
      count = count + 1;
      console.log(count);
    }
  }

  render() {
    runIfDev(() => {
      this.game.debug.text(this.game.time.fps, 2, 14, '#00ff00');
      this.game.debug.pointer(this.game.input.mousePointer);
      this.game.debug.pointer(this.game.input.pointer1);
      this.game.debug.spriteInfo(this.mushroom, 32, 32);
    });
  }
}
