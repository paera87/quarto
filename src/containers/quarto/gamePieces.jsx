import React from 'react';
import { connect } from 'react-redux';
import Piece from './piece';

const GamePieces = ({ availablePieces, placedPieces }) => {
    console.log(placedPieces);
    return (
        <div className="row">
            {availablePieces.map((piece, index) => {
                return (
                    <Piece hide={placedPieces.includes(piece.id)} piece={piece} key={index} />
                )
            })}
        </div>
    )
}

const mapStateToProps = ({ game }) => ({
    availablePieces: game.availablePieces,
    placedPieces: game.placedPieces,
})

export default connect(mapStateToProps)(GamePieces);