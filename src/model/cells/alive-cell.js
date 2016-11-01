import Cell from './cell';
import DeadCell from './dead-cell';

const IS_ALIVE = true;

export default class AliveCell extends Cell {
  constructor() {
    super(IS_ALIVE);
  }

  evolve(numberOfAliveNeighbors) {
    if([2, 3].includes(numberOfAliveNeighbors)) {
      return this;
    }

    return new DeadCell();
  }
}
