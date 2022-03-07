import React from 'react'

const Board = () => {



    const flipCellsAround = (cord) => {
        let boardcurr = board.gameBoard
        let [y, x] = cord.split("-").map(Number)
        const flipCell = (y, x) => {
            if (x >= 0 && x < board.cols && y >= 0 && y < board.rows) {
                boardcurr[y][x] = !boardcurr[y][x]
            }
        }
        flipCell(y, x)
        flipCell(y, x - 1)
        flipCell(y, x + 1)
        flipCell(y - 1, x)
        flipCell(y + 1, x)
        let hasWon = boardcurr.every(row => row.every(cell => !cell))
        setBoard(prev => ({
            ...prev,
            gameBoard: boardcurr,
            hasWon: hasWon
        }))
    }
    return  (
        <div>
            Board
        </div>
    )
}
export default Board
