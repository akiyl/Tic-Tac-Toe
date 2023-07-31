import  { useState } from 'react'

import { Board } from './Components/board/board'
type ArrayProps = Array<Array<string|null>>
const makeComputerMove =(board:ArrayProps) :[Number,Number]=>{
    const emptyCells :[number,number][]=[];
        board.forEach((row,rowIndex)=>{
            row.forEach((cell,cellIndex)=>{
                if(!cell){
                    emptyCells.push([rowIndex,cellIndex])
                }
            })
        })
    const randomNumber = Math.floor(Math.random()*emptyCells.length)
    return emptyCells[randomNumber]
}
const checkWinner = (board :ArrayProps):string | null=>{
    const lines=[
        //rows
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],
        //columns
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],

        //Diagonals
        [board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]],
    ];
    for (const line of lines){
        if (line[0]&&line[0]===line[1]&&line[1]===line[2]){
            return line[0]
        }
    }
    return null
}
 export const TicTacToe= ()=>{const initialBoard = Array.from({ length: 3 }, () =>
 Array.from({ length: 3 }, () => null)
);

    const [board,setBoard]= useState <ArrayProps>(initialBoard)
    const [player,setPlayer] = useState<string> ('x')
    const [winner,setWinner] = useState<string|null> (null)

    const handleOnclick = (row:number , col:number)=>{
        if (board[row][col] || winner){return;}
        const updatedBoard = board.map((newRow,rowIndex)=>newRow.map((cell,cellIndex)=>rowIndex===row&&cellIndex===col?player:cell))
        setBoard(updatedBoard)
        const newBoard  = checkWinner(updatedBoard)
        setWinner (newBoard)
        setPlayer ('x')
        if (!newBoard){
            const [computerRow,computerCol] =  makeComputerMove(updatedBoard)
            const updatedComputerBoard = updatedBoard.map((newRow,rowIndex)=>newRow.map((cell,cellIndex)=>rowIndex===computerRow && cellIndex === computerCol?'0': cell));
            setTimeout(()=>{setBoard(updatedComputerBoard)
                setWinner(checkWinner(updatedComputerBoard))},150)
            
        }
    }
    const restartGame = () => {
        setBoard(initialBoard);
        setPlayer("X");
        setWinner(null);
        
    };
    return(<div className='Tic-Tac-Toe'>
        <h1 className='head'> Tic Tac Toe</h1>
        <Board board={board} HandleClick={handleOnclick}/>
        <p> {winner && `${winner=='x' ? "YOU WIN" : "AI WINS"}`}</p>
        <button className='reset' type='button' onClick={() => restartGame()}>
				Start new Game
			</button>
    </div>)
}