import React from 'react';
import Square from './Square';
import { connect } from 'react-redux';
import { setWinner, restartGame } from '../actions';

function calculateWinner(squares, setWinnerPlayer) {
  const possibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < possibilities.length; i++) {
    const [a, b, c] = possibilities[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      setWinnerPlayer(squares[a]);
      return squares[a];
    }
  }
  return false;
}

function renderSquare(i) {
  return <Square index={i} />
}

function Board({ squares, xIsNext, setWinnerPlayer, winnerPlayer, resetGame }) {
  const winner = calculateWinner(squares, setWinnerPlayer);
  let nextPlayer = xIsNext ? 'X' : 'O';
  let status = 'Próximo a jogar: ' + nextPlayer;

  if (winner) {
    status = 'Jogador ' + winner + ' ganhou!'
  }
  return (
    <div className="game-container">
      <h3>{status}</h3>
      <div className="board">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      {winnerPlayer && <button className="restart-game" onClick={() => resetGame()}>RESTART GAME</button>}
    </div>
  );
}

const mapStateToProps = ({ gameReducer: { squares, xIsNext, winnerPlayer } }) => ({ squares, xIsNext, winnerPlayer });

const mapDispatchToProps = (dispatch) => ({
  setWinnerPlayer: (player) => dispatch(setWinner(player)),
  resetGame: () => dispatch(restartGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
