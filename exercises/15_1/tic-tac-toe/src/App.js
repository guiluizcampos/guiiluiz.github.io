import React, { Component } from 'react';
import Game from './components/Game';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}

export default App;
