import AliveCell from './alive-cell';
import Cell from './cell';
import DeadCell from './dead-cell';

const CHANCE_OF_BECOMING_ALIVE = 0.15;

export default class RandomEvolvingCell extends Cell {
  evolve() {
    if(Math.random() < CHANCE_OF_BECOMING_ALIVE) {
      return new AliveCell();
    }

    return new DeadCell();
  }
}
