const checkForWinner = (board, availablePieces) => {
    let winningRow = [];
    let win = false;
    for (let i = 0; i < 4; i++) {
        let row = [];
        let column = [];
        for (let j = 0; j < 4; j++) {
            let horizontalPiece = availablePieces.find(x => x.id === board[i][j])
            let verticalPiece = availablePieces.find(x => x.id === board[j][i])
            if (horizontalPiece !== undefined) row.push(horizontalPiece);
            if (verticalPiece !== undefined) column.push(verticalPiece);
        }
        if (row.length === 4) {
            win = squareSummation(row);
            winningRow = row.map(({ id }) => id);
        }
        if (win) break;
        if (column.length === 4){
            win = squareSummation(column);
            winningRow = column.map(({ id }) => id);
        }
        if (win) break;
    }
    if (!win) {
        const diagonal1 = [board[0][0], board[1][1], board[2][2], board[3][3]];
        const diagonal2 = [board[0][3], board[1][2], board[2][1], board[3][0]];
        let diagonal1Pieces = [];
        let diagonal2Pieces = [];
        for (let i = 0; i < 4; i++) {
            let diagonal1Piece = availablePieces.find(x => x.id === diagonal1[i]);
            let diagonal2Piece = availablePieces.find(x => x.id === diagonal2[i]);
            if (diagonal1Piece !== undefined) diagonal1Pieces.push(diagonal1Piece);
            if (diagonal2Piece !== undefined) diagonal2Pieces.push(diagonal2Piece);
        }
        if (diagonal1Pieces.length === 4){
            win = squareSummation(diagonal1Pieces);
            winningRow = diagonal1Pieces.map(({ id }) => id);
        }
        if (!win && diagonal2Pieces.length === 4){
            win = squareSummation(diagonal2Pieces);
            winningRow = diagonal2Pieces.map(({ id }) => id);
        }
    }
    if (win) return winningRow
    else return [];
}

const squareSummation = (squares) => {
    let sum = squares.reduce((total, sq) => {
        return {
            shape: total.shape + sq.shape,
            hollow: total.hollow + sq.hollow,
            color: total.color + sq.color,
            size: total.size + sq.size
        }
    }, { shape: 0, hollow: 0, color: 0, size: 0 })

    for (let prop in sum) {
        if (sum[prop] === 0 || sum[prop] === 4)
            return true;
    }
    return false;
}

export default checkForWinner;