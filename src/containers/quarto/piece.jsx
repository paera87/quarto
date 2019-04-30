import React from 'react'
import { connect } from 'react-redux'
import {pickupGamePiece} from '../../actions/gameActions';

const Piece = ({ piece, currentlyHeld, pickUpGamePiece, hide }) => {
    const current = currentlyHeld === piece.id ? true : false;
    return (
        <div className="col s3 game-piece center valign-wrapper">
            {current||hide ? (<div>Used</div>) : (<div className={
                (piece.shape ? 'round' : 'square') + " " +
                (piece.color ? 'brown' : 'lime') + " " +
                (piece.hollow ? 'bordered' : '') + " " +
                (piece.size ? 'big' : '')}
                onClick={() => pickUpGamePiece(piece.id)}>
                X
            </div>)}
        </div>
    )
}
const mapStateToProps = ({ game }) => ({
    currentlyHeld: game.currentlyHeld
})
const mapDispatchToProps = (dispatch) => {
    return {
        pickUpGamePiece: (gamePieceId) => { dispatch(pickupGamePiece(gamePieceId)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Piece);