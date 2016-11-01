import Cell from './cell';
import AliveCell from './alive-cell';

export default class DeadCell extends Cell {
  constructor(x, y) {
    super(x, y);
    this.isAlive = false;
  }

  evolve(numberOfAliveNeighbors) {
    if(numberOfAliveNeighbors === 3) {
      return new AliveCell(this.x, this.y);
    }

    return this;
  }
}
