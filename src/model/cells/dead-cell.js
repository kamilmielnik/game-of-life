import AliveCell from './alive-cell';
import Cell from './cell';

export default class DeadCell extends Cell {
  get isAlive () {
    return false;
  }

  evolve(numberOfAliveNeighbors) {
    if(numberOfAliveNeighbors === 3) {
      return new AliveCell();
    }

    return this;
  }
}
