


function checkIfPatterExists( grid, row, column, pattern ) {
        for( let i = 0; i < pattern.length; i++ ) {
                let sliceString = grid[row].slice( column, column + pattern[0].length );
                if( pattern[ i ] !== sliceString ) {
                        return false;
                }
                row++;
        }
        return true;
}



// Complete the 'gridSearch' function below.
function gridSearch(G, P) {
        for( let i = 0; i < G.length; i++ ) {
                for( let j = 0; j < G[i].length; j++ ) {
                        if( G[i][j] === P[0][0] && checkIfPatterExists( G, i, j, P ) ) {
                                return "YES";
                        }
                }
        }
        return "NO";
}

