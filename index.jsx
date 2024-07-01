import React, { useState } from 'react'
import './style.css';

function Square({value, onClick}) {
    return <button onClick={onClick} className="square">{value}</button>
}

function TicTacToe() {

    const [square, setSquare] = useState(Array(9).fill(''))
    const [XTurn, setXturn] = useState(true);

    function handleClick(getCurrentSquare){

        let copySquare = [...square]
        copySquare[getCurrentSquare] = XTurn ? 'X' : 'O';
       
        setXturn(!XTurn);
        setSquare(copySquare)
    }

  return (
    <div className="tic-tac-toe-cont">
        {/* we need to 9 rows */}
        <div className="row"></div>
            <Square value={square[0]} onClick={() => handleClick(0)} />
            <Square value={square[1]} onClick={() => handleClick(1)} />
            <Square value={square[2]} onClick={() => handleClick(2)} />
        <div className="row"></div>
            <Square value={square[3]} onClick={() => handleClick(3)} />
            <Square value={square[4]} onClick={() => handleClick(4)} />
            <Square value={square[5]} onClick={() => handleClick(5)} />
        <div className="row"></div>
            <Square value={square[6]} onClick={() => handleClick(6)} />
            <Square value={square[7]} onClick={() => handleClick(7)} />
            <Square value={square[8]} onClick={() => handleClick(8)} />
    </div>
  )
}

export default TicTacToe