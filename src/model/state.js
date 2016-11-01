import range from './utils/range';

export default class State {
  constructor(width, height, initialState) {
    this.width = width;
    this.height = height;
    this.state = initialState;
  }

  map(callback) {
    const newState = range(0, this.width).map(x => range(0, this.height).map(y => {
      const cell = this.state[x][y];
      const newCell = callback(cell, x, y);
      return newCell;
    }));

    return new State(this.width, this.height, newState);
  }

  getNeighborhood(targetX, targetY) {
    const { minX, maxX, minY, maxY } = this.getNeighborhoodPositions(targetX, targetY);

    return range(minX, maxX + 1).map(
      x => range(minY, maxY + 1).map(
        y => this.state[x][y]
      )
    )
    .reduce(
      (neighborhood, cellsInColumn) => [
        ...neighborhood,
        ...cellsInColumn
      ],
      []
    );
  }

  getNeighborhoodPositions(x, y) {
    const minX = Math.max(0, x - 1);
    const maxX = Math.min(this.width - 1, x + 1);
    const minY = Math.max(0, y - 1);
    const maxY = Math.min(this.height - 1, y + 1);

    return { minX, maxX, minY, maxY };
  }
}
