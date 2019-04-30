export const PICKUP_GAMEPIECE = 'quarto/PICKUP_GAMEPIECE'
export const PLACE_GAMEPIECE = 'quarto/PLACE_GAMEPIECE';
export const RESET_GAME = 'cuarto/RESET_GAME';

export const pickupGamePiece = (id) => {
    return { type: PICKUP_GAMEPIECE, id }
}
export const placeGamePiece = (x,y, id) => {
    return { type: PLACE_GAMEPIECE, x: x, y: y, id: id }
}