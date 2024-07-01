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
            <Square onClick={() => handleClick(0)} />
            <Square onClick={() => handleClick(1)} />
            <Square onClick={() => handleClick(2)} />
        <div className="row"></div>
            <Square onClick={() => handleClick(3)} />
            <Square onClick={() => handleClick(4)} />
            <Square onClick={() => handleClick(5)} />
        <div className="row"></div>
            <Square onClick={() => handleClick(6)} />
            <Square onClick={() => handleClick(7)} />
            <Square onClick={() => handleClick(8)} />
    </div>
  )
}

export default TicTacToe