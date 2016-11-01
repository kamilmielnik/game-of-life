import Cell from './cell';
import AliveCell from './alive-cell';

export default class DeadCell extends Cell {
  constructor() {
    super();
    this.isAlive = false;
  }

  evolve(numberOfAliveNeighbors) {
    if(numberOfAliveNeighbors === 3) {
      return new AliveCell();
    }

    return this;
  }
}
