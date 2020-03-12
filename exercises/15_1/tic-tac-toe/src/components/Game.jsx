import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
  render(){
    return (
      <div className="game">
        <h1>Jogo da Velha</h1>
        <Board />
      </div>
    );
  }
}

export default Game;
