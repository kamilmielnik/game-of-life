import AliveCell from './alive-cell';
import Cell from './cell';

const IS_ALIVE = false;

export default class DeadCell extends Cell {
  constructor() {
    super(IS_ALIVE);
  }

  evolve(numberOfAliveNeighbors) {
    if(numberOfAliveNeighbors === 3) {
      return new AliveCell();
    }

    return this;
  }
}
