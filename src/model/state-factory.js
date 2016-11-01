import DeadCell from './cells/dead-cell';
import RandomEvolvingCell from './cells/random-evolving-cell';
import State from './state';

export default class StateFactory {
  create(width, height, createCell) {
    const initialState = [];

    for (let x = 0; x < width; ++x) {
      initialState.push([]);
      for (let y = 0; y < height; ++y) {
        const cell = createCell(x, y);
        initialState[x].push(cell);
      }
    }

    return new State(initialState, width, height);
  }

  createAllDead(width, height) {
    return this.create(width, height, (x, y) => new DeadCell(x, y));
  }

  createAllRandom(width, height) {
    return this.create(width, height, (x, y) => new RandomEvolvingCell(x, y));
  }
}
