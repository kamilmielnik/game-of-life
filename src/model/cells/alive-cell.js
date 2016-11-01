import Cell from './cell';
import DeadCell from './dead-cell';

export default class AliveCell extends Cell {
  constructor() {
    super();
    this.isAlive = true;
  }

  evolve(numberOfAliveNeighbors) {
    if([2, 3].includes(numberOfAliveNeighbors)) {
      return this;
    }

    return new DeadCell();
  }
}
