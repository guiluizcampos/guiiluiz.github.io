import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import gameReducer from './reducers/gameReducer';

function renderWithRedux(
  ui,
  { initialState, store = createStore(gameReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

test('renders with empty board', () => {
  const { getByText } = renderWithRedux(<App />);
  const square = getByText(/Próximo a jogar:/i).nextSibling.children;
  
  for (let i = 0; i < 9; i++) {
    expect(square[i]).toBeInTheDocument();
    expect(square[i].textContent).toBe('');
  }
});

test('mark the square on click', () => {
  const { getByText } = renderWithRedux(<App />);
  const square = getByText(/Próximo a jogar:/i).nextSibling.children;
  fireEvent.click(square[2]);

  for (let i = 0; i < 9; i++) {
    expect(square[i]).toBeInTheDocument();
    if (i === 2) expect(square[i].textContent).not.toBe('');
    else expect(square[i].textContent).toBe('');
  }
});

test('sequential clicks alternately mark each of the symbols', () => {
  const { getByText } = renderWithRedux(<App />);
  const square = getByText(/Próximo a jogar:/i).nextSibling.children;
  fireEvent.click(square[2]);
  fireEvent.click(square[4]);
  fireEvent.click(square[5]);
  fireEvent.click(square[8]);

  for (let i = 0; i < 9; i++) {
    expect(square[i]).toBeInTheDocument();
    if (i === 2 || i === 5) expect(square[i].textContent).toBe('X');
    else if (i === 4 || i === 8) expect(square[i].textContent).toBe('O');
    else expect(square[i].textContent).toBe('');
  }
});

test('clicks in an already marked square does not replace it', () => {
  const { getByText } = renderWithRedux(<App />);
  const square = getByText(/Próximo a jogar:/i).nextSibling.children;
  fireEvent.click(square[2]);
  fireEvent.click(square[2]);

  expect(square[2].textContent).toBe('X');
});


test('verify winning cases and reset game when clicks the button', () => {
  const { getByText } = renderWithRedux(<App />);
  const status = getByText(/Próximo a jogar:/i);
  const square = getByText(/Próximo a jogar:/i).nextSibling.children;
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

  expect(status.textContent).toBe('Próximo a jogar: X');

  fireEvent.click(square[0]);
  fireEvent.click(square[7]);
  fireEvent.click(square[1]);
  fireEvent.click(square[8]);
  fireEvent.click(square[2]);

  possibilities.forEach((line) => {
    let [a, b, c] = line;
    if (square[a].textContent !== '' && square[a].textContent == square[b].textContent && square[a].textContent == square[c].textContent) {
      expect(status.textContent).toBe(`Jogador ${square[a].textContent} ganhou!`);
    }
  });

  fireEvent.click(getByText(/RESTART GAME/i));
  for (let i = 0; i < 9; i++) {
    expect(square[i].textContent).toBe('');
  }
});
