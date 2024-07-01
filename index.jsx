import React from 'react'

function Square({value}) {
    return <button>{value}</button>
}

function TicTacToe() {
  return (
    <div className="tic-tac-toe-cont">
        {/* we need to 9 rows */}
        <div className="row"></div>
            <Square/>
            <Square/>
            <Square/>
        <div className="row"></div>
            <Square/>
            <Square/>
            <Square/>
        <div className="row"></div>
            <Square/>
            <Square/>
            <Square/>
    </div>
  )
}

export default TicTacToe