export default class Game {
  constructor(initialState) {
    this.state = initialState;
  }

  step() {
    this.state = this.state.map((cell, x, y) => {
      const neighborhood = this.state.getNeighborhood(x, y);
      const neighbors = neighborhood.filter(neighborCandidate => neighborCandidate !== cell);
      const numberOfAliveNeighbors = neighbors.filter(({ isAlive }) => isAlive).length;
      return cell.evolve(numberOfAliveNeighbors);
    });
  }
}
