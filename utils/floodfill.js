const {
  adjacentTiles,
  coordinatesAreEqual,
  coordinateOutOfBounds,
} = require("./utils");

// Takes in a position on the board that your snake could move in, calculates the number
// of open spaces that moving into that position leads to
// 1. Visit node
// 2. Mark as visited
// 3. Add to counter
// 4. Recurse through adjacent nodes

// Below lists detail all four possible movements
row = [1, -1, 0, 0];
col = [0, 0, 1, -1];

const floodfillHelper = (grid, x, y, maxFloodfillCount, visited) => {
  count = 0;
  let q = [];
  q.push([x, y]);
  while (q.length != 0) {
    poppedNode = q.shift();
    newX = poppedNode[0];
    newY = poppedNode[1];
    if (
      grid[newX][newY] == 1 &&
      !visited[JSON.stringify(newX) + "," + JSON.stringify(newY)]
    ) {
      count++;
      if (count >= maxFloodfillCount) {
        return count;
      }
      // Mark tile in grid as visited by floodfill
      visited[JSON.stringify(newX) + "," + JSON.stringify(newY)] = true;
      for (i = 0; i < 4; i++) {
        if (isSafe(grid, newX + row[i], newY + col[i])) {
          q.push([newX + row[i], newY + col[i]]);
        }
      }
    }
  }
  return count;
};

const largestAdjacentFloodfill = (grid, snakeHead, maxFloodfillCount) => {
  const gridHeight = grid[0].length;
  const gridWidth = grid.length;

  // tilesToCheck are all within bounds
  tilesToCheck = adjacentTiles(snakeHead, gridHeight, gridWidth);
  visited = {};

  let adjacentScores = [];

  // Run floodfill through tilesToCheck
  for (var i = 0; i < tilesToCheck.length; i++) {
    // If already visited, don't run floodfill on tile
    if (
      !visited[
        JSON.stringify(tilesToCheck[i].x) +
          "," +
          JSON.stringify(tilesToCheck[i].y)
      ]
    ) {
      adjacentScores.push(
        floodfillHelper(
          grid,
          tilesToCheck[i].x,
          tilesToCheck[i].y,
          maxFloodfillCount,
          visited
        )
      );
    } else {
      // console.log("skipped: " + JSON.stringify(tilesToCheck[i].x) + "," + JSON.stringify(tilesToCheck[i].y))
    }
  }
  // console.log(adjacentScores)
  curMax = adjacentScores[0];
  for (var i = 1; i < adjacentScores.length; i++) {
    if (adjacentScores[i] > curMax) {
      curMax = adjacentScores[i];
    }
  }
  return curMax;
};

const isSafe = (board, x, y) => {
  return (
    0 <= x && x < board.length && 0 <= y && y < board.length && board[x][y] == 1
  );
};

// testgrid = [
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
// [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
// [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0],
// [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
// [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
// [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1],
// [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
// ]

// console.log(largestAdjacentFloodfill(testgrid, {x:10,y: 1}, 32));

module.exports = {
  floodfillHelper,
  largestAdjacentFloodfill,
};
