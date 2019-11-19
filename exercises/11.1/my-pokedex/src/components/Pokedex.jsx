import React from 'react';
import Pokemon from './Pokemon';
import data from '../data';

class Pokedex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  nextPokemon = event => {
    this.setState({
      index: this.state.index === data.length-1 ? 0 : this.state.index+=1
    })
  }

  render() {
    return (
      <div className="pokedex-body">
        <Pokemon key={data[this.state.index].id} pokemon={data[this.state.index]} />
        <div>
          <button onClick={this.nextPokemon}>Próximo Pokemon</button>
        </div>
      </div>
    );
  }
}

export default Pokedex;
