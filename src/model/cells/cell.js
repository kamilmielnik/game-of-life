export default class Cell {
  constructor(isAlive) {
    this.isAlive = isAlive;
  }

  evolve() {
    return this;
  }
}
