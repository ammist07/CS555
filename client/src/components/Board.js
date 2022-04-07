import React, {useContext, useState, useEffect} from 'react'
import {Context as UserContext} from "../context/UserContext"
import Cell from "./Cell";
import win from './win.mp3'
import apis from '../api'
import Button from '@mui/material/Button'
import TimeDisplay from './TimeDisplay'
import { Link } from 'react-router-dom'


const Board = () => {

    const userContext = useContext(UserContext)
    const [board, setBoard] = useState({
        rows: 3,
        cols: 3,
        flowerChance: 0.25,
        hasWon: false,
        gameBoard: [[]],
        edit: false,
        start: 0,
        end: 0,
    })
    const [done, setDone] = useState(false)
    let audio_win = new Audio(win)

    useEffect( () => {
        createBoard()
        setBoard((prev) => ({
            ...prev,
            start: new Date(),
        }))
    },[])
    useEffect( () => {
        setDone(true)
    },[board.edit])
    useEffect(() => {
        addNewGame()
    }, [board.hasWon])


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
            hasWon: hasWon,
            end: new Date(),
        }))
    }


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
    const makeTable = () => {
        let tblBoard = []
        for (let y = 0; y < board.rows; y++){
            let row = []
            for (let x = 0; x < board.cols; x++){
                let coord = `${y}-${x}`
                row.push(
                    <Cell
                        key={coord}
                        isLit={board.gameBoard[y][x]}
                        flipCellsAroundMe={() => flipCellsAround(coord)}
                    />
                )
            }
            tblBoard.push(<tr key={y}>{row}</tr>)
        }
        return (
            <table className='Board'>
                <tbody>{tblBoard}</tbody>
            </table>
        )

    }

    const addNewGame = async () => {
        let date = Date.now()
		if (board.hasWon) {
			await audio_win.play()
			await apis.addGame({
				userId: userContext.state.user.id,
				playedAt: date,
				gameTime: board.end - board.start,
			})
            await apis.addToLeaderboard({
                userId: userContext.state.user.id,
                playedAt: date,
                gameTime: board.end - board.start,
            })
		}
	}
    return  (
        <div>
			{board.hasWon ? (
				<div>
					<div>Won</div>
					Time: <TimeDisplay time={board.end - board.start} />
					<Button
						data-testid='homebutton'
						variant='contained'
						id='paybutton'
						component={Link}
						to='/'
					>
						Play Again
					</Button>
				</div>
			) : (
				<div>
					<div>Lets Play</div>
					{done ? makeTable() : <div>Loading...</div>}
				</div>
			)}
		</div>

    )
}
export default Board
