import React from 'react';
import Pokemon from './Pokemon';
import data from '../data';

class Pokedex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      type: 'Psychic'
    }
  }

  nextPokemon = event => {
    let newIndex = this.state.index
    newIndex+=1
    this.setState({
      index: this.state.index === data.length-1 ? 0 : newIndex
    })
  }

  render() {

    return (
      <div className="pokedex-body">
        <Pokemon pokemon={data[this.state.index]} />
        <div>
          <button onClick={this.fireType}>Fire</button>
          <button onClick={this.psychicType}>Psychic</button>
        </div>
        <div>
          <button onClick={this.nextPokemon}>Próximo Pokemon</button>
        </div>
      </div>
    );
  }
}

export default Pokedex;
