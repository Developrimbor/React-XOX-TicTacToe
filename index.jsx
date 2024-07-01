import React, { useEffect, useState } from 'react'
import './style.css';

function Square({value, onClick}) {
    return <button onClick={onClick} className="square">{value}</button>
}

function TicTacToe() {

    const [square, setSquare] = useState(Array(9).fill(''))
    const [XTurn, setXturn] = useState(true);
    const [status, setStatus] = useState('');

    function getWinner(square){
        const winningPatterns = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for (let i = 0; i < winningPatterns.length; i++) {
            const [x,y,z] = winningPatterns[i]

            if (square[x] && square[x] === square[y] && square[x] === square[z]) {
                
                return square[x];
            }
        }

        return null;
    }

    function handleClick(getCurrentSquare){

        let copySquare = [...square]
        if (getWinner(copySquare) || copySquare[getCurrentSquare]) {
            return;
        }
        copySquare[getCurrentSquare] = XTurn ? 'X' : 'O';
       
        setXturn(!XTurn);
        setSquare(copySquare)
    }

    useEffect(() => {
        if (!getWinner(square) && square.every(item => item !== '')) {
            setSquare(`DRAW!! Restart the Game`)

        }else if (getWinner(square)) {
            setStatus(`Winner is ${getWinner(square)}`)
        
        }else {
            setStatus(`Next player is ${XTurn ? 'X' : 'O'}`)
        }

    },[square,XTurn])

  return (
    <div className="tic-tac-toe-cont">
        {/* we need to 9 rows */}
        <div className="row">
            <Square value={square[0]} onClick={() => handleClick(0)} />
            <Square value={square[1]} onClick={() => handleClick(1)} />
            <Square value={square[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="row">
            <Square value={square[3]} onClick={() => handleClick(3)} />
            <Square value={square[4]} onClick={() => handleClick(4)} />
            <Square value={square[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="row">
            <Square value={square[6]} onClick={() => handleClick(6)} />
            <Square value={square[7]} onClick={() => handleClick(7)} />
            <Square value={square[8]} onClick={() => handleClick(8)} />
        </div>
        <h1>{status}</h1>
    </div>
  )
}

export default TicTacToe