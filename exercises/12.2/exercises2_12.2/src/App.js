import React from 'react';
import './App.css';
import Doguitchos from './components/Doguitchos';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDoguitchos: false
    };
  }

  clickDoguitcho = () => {
    let showDoguitchosCurrent = !this.state.showDoguitchos;
    this.setState({
      showDoguitchos: showDoguitchosCurrent
    });
  }
  
  render() {
    const { showDoguitchos } = this.state

    const buttonLabel = showDoguitchos ? 'Fechar Dog :(' : 'Abrir Doguitchos :)'
    const content = showDoguitchos ? <Doguitchos /> : <p>Infelizmente tá sem Doguitchos por enquanto!</p>

    return (
      <div className="App">
        <button onClick={this.clickDoguitcho}>{buttonLabel}</button>
        {content}
      </div>
    );
  }
}

export default App;
