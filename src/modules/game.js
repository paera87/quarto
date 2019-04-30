import checkForWinner from './helpers/winchecker';
import {
    PICKUP_GAMEPIECE,
    PLACE_GAMEPIECE,
    RESET_GAME
} from '../actions/gameActions'

// export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
// export const DECREMENT = 'counter/DECREMENT'

const initialState = {
    board: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    availablePieces: [
        { id: 1, hollow: 0, shape: 0, color: 0, size: 0 },
        { id: 2, hollow: 0, shape: 0, color: 0, size: 1 },
        { id: 3, hollow: 0, shape: 0, color: 1, size: 0 },
        { id: 4, hollow: 0, shape: 0, color: 1, size: 1 },
        { id: 5, hollow: 0, shape: 1, color: 0, size: 0 },
        { id: 6, hollow: 0, shape: 1, color: 0, size: 1 },
        { id: 7, hollow: 0, shape: 1, color: 1, size: 0 },
        { id: 8, hollow: 0, shape: 1, color: 1, size: 1 },
        { id: 9, hollow: 1, shape: 0, color: 0, size: 0 },
        { id: 10, hollow: 1, shape: 0, color: 0, size: 1 },
        { id: 11, hollow: 1, shape: 0, color: 1, size: 0 },
        { id: 12, hollow: 1, shape: 0, color: 1, size: 1 },
        { id: 13, hollow: 1, shape: 1, color: 0, size: 0 },
        { id: 14, hollow: 1, shape: 1, color: 0, size: 1 },
        { id: 15, hollow: 1, shape: 1, color: 1, size: 0 },
        { id: 16, hollow: 1, shape: 1, color: 1, size: 1 },
    ],
    currentlyHeld: null,
    placedPieces: [],
    winningRow: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PLACE_GAMEPIECE:
            let newBoard = [...state.board];
            newBoard[action.y][action.x] = action.id;
            return {
                ...state,
                board: newBoard,
                currentlyHeld: null,
                placedPieces: [...state.placedPieces, action.id],
                winningRow: checkForWinner(newBoard, state.availablePieces)
            }

        case PICKUP_GAMEPIECE:
            return {
                ...state,
                currentlyHeld: action.id
            }
        case RESET_GAME:
            return {
                state: initialState
            }
        default:
            return state
    }
}