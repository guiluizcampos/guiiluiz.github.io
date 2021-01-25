export const FILL_SQUARE = 'FILL_SQUARE';
export const SET_WINNER_PLAYER = 'SET_WINNER_PLAYER';
export const RESTART_GAME = 'RESTART_GAME';

export const restartGame = () => ({
  type: RESTART_GAME,
});

export const setWinner = (player) => ({
  type: SET_WINNER_PLAYER,
  player,
});

export const fillSquares = () => ({
  type: FILL_SQUARE,
});
