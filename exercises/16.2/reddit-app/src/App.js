import React from 'react';
import MainScreen from './components/MainScreen';
import { Provider } from './context/RedditContext';
import './App.css';

function App() {
  return (
    <Provider>
      <MainScreen />
    </Provider>
  );
}

export default App;
