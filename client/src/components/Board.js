import React, {useContext, useState, useEffect} from 'react'
import {Context as UserContext} from "../context/UserContext"


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
    const userContext = useContext(UserContext)
    const [board, setBoard] = useState({
        rows: 3,
        cols: 3,
        flowerChance: 0.25,
        hasWon: false,
        gameBoard: [[]],
        edit: false
    })
    const createBoard = async () => {
        let boardcurr = []
        for (let y = 0; y < board.rows; y++){
            let row = []
            for (let x = 0; x < board.cols; x++){
                row.push(Math.random() < board.flowerChance)
            }
            boardcurr.push(row)
        }
        await setBoard(prev => ({
            ...prev, gameBoard:boardcurr, edit:true
        }))
    }
    return  (
        <div>
            Board
        </div>
    )
}
export default Board
