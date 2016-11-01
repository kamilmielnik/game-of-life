export default class State {
  constructor(initialState, width, height) {
    this.state = initialState;
    this.width = width;
    this.height = height;
  }

  map(callback) {
    const newState = [];

    for (let x = 0; x < this.width; ++x) {
      newState.push([]);
      for (let y = 0; y < this.height; ++y) {
        const cell = this.state[x][y];
        const newCell = callback(cell, x, y);
        newState[x].push(newCell);
      }
    }

    return new State(newState, this.width, this.height);
  }

  getNeighbors(targetX, targetY) {
    const neighbors = [];
    const { minX, maxX, minY, maxY } = this.getNeighborsPositions(targetX, targetY);

    forEachInRange(minX, maxX, x => forEachInRange(minY, maxY, y => {
      const isTarget = x === targetX && y === targetY;
      if(!isTarget) {
        neighbors.push(this.state[x][y]);
      }
    }));

    return neighbors;
  }

  getNeighborsPositions(x, y) {
    const minX = Math.max(0, x - 1);
    const maxX = Math.min(this.width - 1, x + 1);
    const minY = Math.max(0, y - 1);
    const maxY = Math.min(this.height - 1, y + 1);
    return { minX, maxX, minY, maxY };
  }
}

function forEachInRange(min, max, callback) {
  for (let i = min; i <= max; ++i) {
    callback(i);
  }
}
