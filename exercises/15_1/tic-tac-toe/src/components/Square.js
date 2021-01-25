import React from 'react';
import { connect } from 'react-redux';
import { fillSquares } from '../actions';
import '../App.css'

function handleClick({ index, squares, fillSquare, xIsNext, winnerPlayer }) {
  if (winnerPlayer || squares[index]) {
    return;
  }
  squares[index] = xIsNext ? 'X' : 'O';
  return fillSquare();
}

function Square(props) {
  return (
    <button className="square" onClick={() => handleClick(props)}>
      {props.squares[props.index]}
    </button>
  );
}

const mapStateToProps = ({ gameReducer: { squares, xIsNext, winnerPlayer } }) => ({ squares, xIsNext, winnerPlayer });

const mapDispatchToProps = (dispatch) => ({
  fillSquare: () => dispatch(fillSquares()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Square);
