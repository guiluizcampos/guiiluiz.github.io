import React from 'react';
import { render, cleanup, waitForDomChange, fireEvent } from '@testing-library/react';
import App from './App';
import { Provider } from './context/RedditContext';

afterEach(cleanup);

test('renders loading while loads', async () => {
  const { getByText } = render(<Provider><App /></Provider>);
  const loading = getByText(/Loading.../i);
  expect(loading).toBeInTheDocument();
  await waitForDomChange();
  expect(loading).not.toBeInTheDocument();
  const title = getByText(/Selecionado:/i);
  expect(title.textContent).toBe('Selecionado: reactjs');
});

const date = new Date();
test('renders subreddits according to dropdown', async () => {
  const { getByText } = render(<Provider><App /></Provider>);
  await waitForDomChange();
  const title = getByText(/Selecionado:/i);
  expect(title.textContent).toBe('Selecionado: reactjs');
  const refreshButton = title.nextSibling.nextSibling.lastChild;
  const lastUpdate = title.nextSibling.nextSibling.firstChild;
  fireEvent.click(refreshButton);
  expect(lastUpdate.textContent).not.toBe(date);
});

test('select frondend in dropdown', async () => {
  const { getByText } = render(<Provider><App /></Provider>);
  await waitForDomChange();
  const title = getByText(/Selecionado:/i);
  const dropdown = title.nextSibling;
  fireEvent.change(dropdown, { target: { value: 'frontend' } });
  expect(title.textContent).toBe('Selecionado: frontend');
});
