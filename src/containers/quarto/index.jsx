import React from 'react'
import { connect } from 'react-redux'
import Square from './square';
import GamePieces from './gamePieces'
import './quarto.css'

const Game = ({board, winningRow}) => {

  const gameBoard = board.map((row, yIndex) => {
    return row.map((square, xIndex) => {
      return (
        <Square lightUp={winningRow.includes(square)} value={square} x={xIndex} y={yIndex} key={xIndex}/>
      )
    })
  })
  return (
    <div className="quarto">
      <h1 className="center blue-text">Quarto</h1>
      <GamePieces/>

      <div className="row">
        {gameBoard}
      </div>
      <form>
        <label></label>
        <input type="text" />
      </form>

    </div>
  )
}

//routes? (state, ownProps)
const mapStateToProps = ({ game }) => ({
  board: game.board,
  winningRow: game.winningRow
})

export default connect(mapStateToProps)(Game);
