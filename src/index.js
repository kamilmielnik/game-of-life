import Game from './model/game';
import StateFactory from './model/state-factory';

const ITERATION_DELAY = 200;

main();

function main() {
  const game = createGame();
  scheduleIteration(game);
}

function createGame() {
  const stateFactory = new StateFactory();
  const state = stateFactory.createAllRandom(20, 20);
  return new Game(state);
}

function scheduleIteration(game) {
  setTimeout(() => {
    game.step();
    printState(game.state);
    scheduleIteration(game);
  }, ITERATION_DELAY);
}

function printState(state) {
  console.log('====================');
  const { state: columns, height } = state;
  const lines = new Array(height).fill('');
  columns.forEach(cells => cells.forEach(({ isAlive }, y) => {
    lines[y] += isAlive ? 'X' : '_';
  }));
  console.log(lines.join('\n'));
}
