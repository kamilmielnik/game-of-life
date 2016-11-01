import DeadCell from './cells/dead-cell';
import RandomEvolvingCell from './cells/random-evolving-cell';
import State from './state';
import range from './utils/range';

export default class StateFactory {
  create(width, height, createCell) {
    const initialState = range(0, width).map(
      x => range(0, height).map(y => createCell(x, y))
    );

    return new State(width, height, initialState);
  }

  createAllDead(width, height) {
    return this.create(width, height, () => new DeadCell());
  }

  createAllRandom(width, height) {
    return this.create(width, height, () => new RandomEvolvingCell());
  }
}
