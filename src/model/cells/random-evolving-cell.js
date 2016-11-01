import Cell from './cell';
import AliveCell from './alive-cell';
import DeadCell from './dead-cell';

export default class RandomEvolvingCell extends Cell {
  constructor() {
    super();
    this.isAlive = false;
  }

  evolve() {
    if(Math.random() < 0.15) {
      return new AliveCell();
    }

    return new DeadCell();
  }
}
