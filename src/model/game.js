export default class Game {
  constructor(initialState) {
    this.state = initialState;
  }

  step() {
    this.state = this.state.map((cell, x, y) => {
      const numberOfAliveNeighbors = this.state.getAliveNeighbors(x, y).length;
      return cell.evolve(numberOfAliveNeighbors);
    });
  }
}
