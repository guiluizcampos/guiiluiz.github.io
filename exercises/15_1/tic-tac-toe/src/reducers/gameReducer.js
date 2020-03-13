import {
  FILL_SQUARE,
  RESTART_GAME,
  SET_WINNER_PLAYER,
} from '../actions';

const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
  winnerPlayer: '',
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_SQUARE:
      return {
        ...state,
        squares: state.squares,
        xIsNext: !state.xIsNext,
      };
    case SET_WINNER_PLAYER:
      return {
        ...state,
        winnerPlayer: action.player,
      };
    case RESTART_GAME:
      return {
        ...state,
        squares: Array(9).fill(null),
        xIsNext: true,
        winnerPlayer: '',
      };
    default:
      return state;
  }
};

export default gameReducer;
