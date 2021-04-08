const up = ({ x, y }) => {
  return { x, y: y + 1 };
};

const down = ({ x, y }) => {
  return { x, y: y - 1 };
};

const left = ({ x, y }) => {
  return { x: x - 1, y };
};

const right = ({ x, y }) => {
  return { x: x + 1, y };
};

// adjacentTiles takes position and board dimensions and returns adjacent tiles.
// confirmed!
const adjacentTiles = ({ x, y }, height, width) => {
  tileList = [];

  if (x == 0 && y == 0) {
    tileList.push(up({ x, y }));
    tileList.push(right({ x, y }));
  } else if (x == 0 && y == height - 1) {
    tileList.push(right({ x, y }));
    tileList.push(down({ x, y }));
  } else if (x == width - 1 && y == height - 1) {
    tileList.push(left({ x, y }));
    tileList.push(down({ x, y }));
  } else if (x == width - 1 && y == 0) {
    tileList.push(up({ x, y }));
    tileList.push(left({ x, y }));
  } else if (x == 0) {
    tileList.push(up({ x, y }));
    tileList.push(down({ x, y }));
    tileList.push(right({ x, y }));
  } else if (y == 0) {
    tileList.push(up({ x, y }));
    tileList.push(left({ x, y }));
    tileList.push(right({ x, y }));
  } else if (y == height - 1) {
    tileList.push(down({ x, y }));
    tileList.push(left({ x, y }));
    tileList.push(right({ x, y }));
  } else if (x == width - 1) {
    tileList.push(left({ x, y }));
    tileList.push(down({ x, y }));
    tileList.push(up({ x, y }));
  } else {
    tileList.push(up({ x, y }));
    tileList.push(down({ x, y }));
    tileList.push(left({ x, y }));
    tileList.push(right({ x, y }));
  }

  return tileList;
};

// console.log(adjacentTiles({ x: 0, y: 0 }, 11, 11));
// console.log(adjacentTiles({ x: 10, y: 10 }, 11, 11));
// console.log(adjacentTiles({ x: 0, y: 10 }, 11, 11));
// console.log(adjacentTiles({ x: 10, y: 0 }, 11, 11));
// console.log(adjacentTiles({ x: 0, y: 5 }, 11, 11));
// console.log(adjacentTiles({ x: 10, y: 5 }, 11, 11));
// console.log(adjacentTiles({ x: 5, y: 0 }, 11, 11));
// console.log(adjacentTiles({ x: 5, y: 10 }, 11, 11));
// console.log(adjacentTiles({ x: 5, y: 5 }, 11, 11));

const boardToGrid = (board) => {
  var value = 1; // by default
  var myGrid = [...Array(board.height)].map((e) =>
    Array(board.width).fill(value)
  );
  const snakes = board.snakes;
  snakes.forEach((snake) => {
    const snakeBody = snake.body;
    snakeBody.forEach((occupiedCoordinate) => {
      myGrid[occupiedCoordinate.x][occupiedCoordinate.y] = 0;
    });
  });

  // console.log("**** MY GRID ****");
  // console.log(myGrid);
  return myGrid;
};

const directions = ["up", "down", "left", "right"];

// Returns a string representing the direction of a destination that is adjacent to the source
const findAdjacentDirection = (source, destination) => {
  if (destination.x === source.x && destination.y === source.y + 1) {
    return "up";
  } else if (destination.x === source.x && destination.y === source.y - 1) {
    return "down";
  } else if (destination.x === source.x + 1 && destination.y === source.y) {
    return "right";
  } else {
    // defaults to "left" if invalid inputs are not adjacent
    return "left";
  }
};

// Returns the adjacent coordinates object {x: ##, y:##} that is in a certain direction from the source
const getAdjacentCoordinate = (source, directionString) => {
  try {
    if (directionString === "up") {
      return up(source)
    } else if (directionString === "left"){
      return left(source)
    } else if (directionString === "right"){
      return right(source)
    } else if (directionString === "down"){
      return down(source)
    } else {
      // String was invalid
      throw Error("invalid direction string")
    }
  } catch(e) {
    console.error(e);
    return source
  }
}

// Given a coordinate, the board height, and board width, checks if out of bounds
const coordinateOutOfBounds = ({x, y}, height, width) => {
  if (x < 0 || y < 0 || x >= width || y >= height) {
    return true
  } else {
    return false
  }
}

// Returns true if coordinates are equal, false otherwise
const coordinatesAreEqual = (coordinate1, coordinate2) => {



  return coordinate1.x == coordinate2.x && coordinate1.y == coordinate2.y;
}

module.exports = {
  up,
  down,
  left,
  right,
  adjacentTiles,
  directions,
  boardToGrid,
  findAdjacentDirection,
  getAdjacentCoordinate,
  coordinateOutOfBounds,
  coordinatesAreEqual
};