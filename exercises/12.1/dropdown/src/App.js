import React from 'react';
import List from './components/List'
import './App.css';

function App() {
  return (
    <div className="App">
      <List items={[
        {id: 1, name: 'Bob Esponja'},
        {id: 2, name: 'Patrick Estrela'},
        {id: 3, name: 'Lula Molusco'},
        {id: 4, name: 'Sr. Sirigueijo'}
      ]}>
        Lista Bolada
      </List>
    </div>
  );
}

export default App;
