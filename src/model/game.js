export default class Game {
  constructor(initialState) {
    this.state = initialState;
  }

  step() {
    this.state = this.state.map((cell, x, y) => {
      const neighbors = this.state.getNeighbors(x, y);
      const numberOfAliveNeighbors = neighbors.filter(({ isAlive }) => isAlive).length;
      return cell.evolve(numberOfAliveNeighbors);
    });
  }
}
