import Phaser from 'phaser';

function run() {
  const game = new Phaser.Game(
    '100%',
    '100%',
    Phaser.AUTO,
    'content', {
      preload: () => game.load.image('img', 'assets/phaser.png'),
      create: () => {
        const img = game.add.sprite(game.world.centerX, game.world.centerY, 'img');
        img.anchor.setTo(0.5, 0.5);
        game.time.advancedTiming = true;
      },
      render: () => game.debug.text(game.time.fps, 2, 14, '#00ff00'),
    });
}

export default run;
