/*
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n (total row & columns in the board)
 *  2. INTEGER k (number of obstacles)
 *  3. INTEGER r_q (queen's row position)
 *  4. INTEGER c_q (queen's column position)
 *  5. 2D_INTEGER_ARRAY obstacles
 */

function queensAttack(n, k, r_q, c_q, obstacles) {
  // Remove duplicates and store obstacle as a string to make it easier to find any matching obstacles
  const obs = new Set(obstacles.map(([row, column]) => `${row} ${column}`));

  // Every row/columns coefficients as follows :
  // left = [0, -1]
  // right = [0, 1]
  // top  = [1, 0]
  // bottom  = [-1, 0]
  // topLeft  = [1, -1]
  // topRight = [1, 1]
  // bottomLeft  = [-1, -1]
  // bottomRight = [-1, 1]
  const coefficients = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
    [1, -1],
    [1, 1],
    [-1, -1],
    [-1, 1],
  ];

  return coefficients.reduce((prev, [rCoeff, cCoeff]) => {
    //Start the row and column count at the specified coefficient
    let row = r_q + rCoeff;
    let column = c_q + cCoeff;

    // make sure that the row and column are always smaller than the board size and always greater than 0
    while (row <= n && row > 0 && column <= n && column > 0) {
      // if our obstacle array has the exact same row/column pair, we are facing an obstacle, thus we return
      // the current number of exposed cells
      if (obs.has(`${row} ${column}`)) return prev;

      // if there was no obstacle found at this row/col pair, increment exposed cells by 1
      // and adjust the row and columns locations
      ++prev;
      row += rCoeff;
      column += cCoeff;
    }

    return prev;
    // We start the reducer fn at 0, which will be the starting point of our exposed cells
  }, 0);
}
