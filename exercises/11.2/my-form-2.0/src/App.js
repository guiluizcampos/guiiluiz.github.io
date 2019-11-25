import React from 'react';
import './App.css';
import Name from './components/input';

function App() {
  return (
    <div className="App">
      <fieldset>
        <Name />
        {/* <Email />
        <Cpf />
        <Endereco />
        <Cidade />
        <Estado />
        <Tipo /> */}
      </fieldset>
    </div>
  );
}

export default App;
