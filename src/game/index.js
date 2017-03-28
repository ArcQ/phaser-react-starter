import createjs from 'createjs';

function startGame() {
  const stage = new createjs.Stage('game');
  const image = new createjs.Bitmap('assets/images/mushroom2.png');
  stage.addChild(image);
  createjs.Ticker.addEventListener('tick', update);
  function update(event) {
    image.x += 10;
    stage.update();
  }
}

export default startGame;

