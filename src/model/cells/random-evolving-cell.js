import Cell from './cell';
import AliveCell from './alive-cell';
import DeadCell from './dead-cell';

export default class RandomEvolvingCell extends Cell {
  constructor(x, y) {
    super(x, y);
    this.isAlive = false;
  }

  evolve() {
    if(Math.random() < 0.15) {
      return new AliveCell(this.x, this.y);
    }

    return new DeadCell(this.x, this.y);
  }
}
