import React from 'react'
import { connect } from 'react-redux'
import {placeGamePiece} from '../../actions/gameActions';
import Piece from './piece'

const Square = ({ x, y, value, availablePieces, currentlyHeld, placeGamePiece, lightUp }) => {
  const handleClick = () => {
    placeGamePiece(x, y, currentlyHeld);
  }

  const placedPiece = availablePieces.find(x => x.id === value);

  return (
    <div className={"square " +(lightUp ? 'winner':'')}>
      {placedPiece ? <Piece piece={placedPiece} /> :
        <div className="col s3 hoverable z-depth-3 valign-wrapper">

          <button className="btn grey" onClick={handleClick}>place piece</button>
        </div>}
    </div>
  )
}

const mapStateToProps = ({ game }) => {
  return {
    currentlyHeld: game.currentlyHeld,
    availablePieces: game.availablePieces
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    placeGamePiece: (x, y, id) => { dispatch(placeGamePiece(x,y,id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square);
