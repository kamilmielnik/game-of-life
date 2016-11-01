export default class Game {
  constructor(initialState) {
    this.state = initialState;
  }

  step() {
    this.state = this.state.map((cell, x, y) => {
      const neighbors = this.state.getNeighbors(x, y);
      const aliveNeighbors = neighbors.filter(({ isAlive }) => isAlive);
      const numberOfAliveNeighbors = aliveNeighbors.length;
      return cell.evolve(numberOfAliveNeighbors);
    });
  }
}
