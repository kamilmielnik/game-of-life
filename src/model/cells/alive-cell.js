import Cell from './cell';
import DeadCell from './dead-cell';

export default class AliveCell extends Cell {
  get isAlive () {
    return true;
  }

  evolve(numberOfAliveNeighbors) {
    if([2, 3].includes(numberOfAliveNeighbors)) {
      return this;
    }

    return new DeadCell();
  }
}
