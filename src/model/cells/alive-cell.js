import Cell from './cell';
import DeadCell from './dead-cell';

export default class AliveCell extends Cell {
  constructor(x, y) {
    super(x, y);
    this.isAlive = true;
  }

  evolve(numberOfAliveNeighbors) {
    if([2, 3].includes(numberOfAliveNeighbors)) {
      return this;
    }

    return new DeadCell(this.x, this.y);
  }
}
