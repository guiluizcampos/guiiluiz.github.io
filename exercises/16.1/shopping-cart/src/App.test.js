import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cartReducer from './reducers/cartReducer';
import App from './App';

function renderWithRedux(
  ui,
  { initialState, store = createStore(cartReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

test('renders all products and empty cart', () => {
  const { getByText, getByAltText } = renderWithRedux(<App />);
  const productList = getByText(/Lojinha do Gui/i).nextSibling;
  expect(productList.childElementCount).toBe(4);

  const emptyCart = getByText(/Seu Carrinho Está Vazio/i);
  const emptyCartImg = getByAltText('empty Box');
  expect(emptyCart).toBeInTheDocument();
  expect(emptyCartImg).toBeInTheDocument();
});

test('add a product to the cart', () => {
  const { getByText, getByAltText, queryAllByText } = renderWithRedux(<App />);
  const productList = getByText(/Lojinha do Gui/i).nextSibling;
  expect(productList.childElementCount).toBe(4);

  const emptyCart = getByText(/Seu Carrinho Está Vazio/i);
  const emptyCartImg = getByAltText('empty Box');
  expect(emptyCart).toBeInTheDocument();
  expect(emptyCartImg).toBeInTheDocument();

  const product0 = productList.firstChild.firstChild;
  const addToCartBtn = product0.lastChild;
  const productTitle = product0.firstChild.firstChild;
  fireEvent.click(addToCartBtn);
  expect(emptyCart).not.toBeInTheDocument();
  expect(emptyCartImg).not.toBeInTheDocument();
  expect(addToCartBtn).not.toBeInTheDocument();
  expect(queryAllByText(productTitle.textContent).length).toBe(2);

  const availableQuantity = queryAllByText(/Available/i);
  const cartItem = availableQuantity[0].parentElement.parentElement;
  const itemQuantity = availableQuantity[0].previousSibling;
  const itemPrice = cartItem.lastChild;
  const itemImage = cartItem.children[1].firstChild;
  const itemName = cartItem.children[2];
  expect(itemImage.src).toBe('data:image/jpeg;base64,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');
  expect(itemName.textContent).toBe(productTitle.textContent);
  expect(itemQuantity.textContent).toBe('1');
  expect(availableQuantity[0].textContent).toBe('Available  3');
  expect(itemPrice.textContent).toBe(productTitle.nextSibling.textContent);
  expect(Number(itemQuantity.textContent)).toBeLessThanOrEqual(Number(availableQuantity[0].textContent.split('  ')[1]));

  const cartList = cartItem.parentElement;
  expect(cartList.childElementCount).toBe(1);
  const totalPrice = cartList.nextSibling;
  expect(totalPrice.textContent).toBe(`Valor Total da Compra: ${itemPrice.textContent}`);
});

test('add & remove multiple products and several of the same product', () => {
  const { getByText, getByTestId, queryAllByText, getByAltText } = renderWithRedux(<App />);
  const productList = getByText(/Lojinha do Gui/i).nextSibling;
  expect(productList.childElementCount).toBe(4);

  const product3 = productList.lastChild.firstChild;
  const addToCartBtn = product3.lastChild;
  fireEvent.click(addToCartBtn);
  expect(addToCartBtn).not.toBeInTheDocument();

  const cartList = productList.nextSibling.firstChild;
  expect(cartList.childElementCount).toBe(2);
  const totalPrice = cartList.nextSibling;
  expect(totalPrice.textContent).toBe('Valor Total da Compra: R$ 145');

  const addProductUnit = getByTestId('add-product3-unit');
  const removeProductUnit = getByTestId('remove-product3-unit');
  const productQuantity = addProductUnit.nextSibling.firstChild;
  const availableQuantity = queryAllByText(/Available/i);
  const itemTotalPrice = availableQuantity[1].parentElement.nextSibling;
  const itemQuantity = availableQuantity[1].previousSibling;

  expect(productQuantity.textContent).toBe('1');
  fireEvent.click(addProductUnit);
  expect(itemQuantity.textContent && productQuantity.textContent).toBe('2');
  expect(itemTotalPrice.textContent).toBe('R$ 130');
  expect(totalPrice.textContent).toBe('Valor Total da Compra: R$ 210');
  fireEvent.click(addProductUnit);
  expect(itemQuantity.textContent && productQuantity.textContent).toBe('3');
  expect(itemTotalPrice.textContent).toBe('R$ 195');
  expect(totalPrice.textContent).toBe('Valor Total da Compra: R$ 275');
  fireEvent.click(addProductUnit);
  fireEvent.click(addProductUnit);
  expect(itemQuantity.textContent && productQuantity.textContent).toBe('5');
  fireEvent.click(addProductUnit);
  expect(itemQuantity.textContent && productQuantity.textContent).toBe('5');
  expect(itemTotalPrice.textContent).toBe('R$ 325');
  expect(totalPrice.textContent).toBe('Valor Total da Compra: R$ 405');

  fireEvent.click(removeProductUnit);
  expect(itemQuantity.textContent && productQuantity.textContent).toBe('4');
  expect(itemTotalPrice.textContent).toBe('R$ 260');
  expect(totalPrice.textContent).toBe('Valor Total da Compra: R$ 340');
  fireEvent.click(removeProductUnit);
  fireEvent.click(removeProductUnit);
  fireEvent.click(removeProductUnit);
  expect(itemQuantity.textContent && productQuantity.textContent).toBe('1');
  fireEvent.click(removeProductUnit);
  expect(itemQuantity.textContent && productQuantity.textContent).toBe('1');
  expect(itemTotalPrice.textContent).toBe('R$ 65');
  expect(totalPrice.textContent).toBe('Valor Total da Compra: R$ 145');

  const removeButton = product3.lastChild.firstChild;
  console.log(removeButton.textContent)
  fireEvent.click(removeButton);
  expect(cartList.childElementCount).toBe(1);
  expect(totalPrice.textContent).toBe('Valor Total da Compra: R$ 80');

  const cartRemoveButton = cartList.firstChild.firstChild;
  fireEvent.click(cartRemoveButton);
  const emptyCart = getByText(/Seu Carrinho Está Vazio/i);
  const emptyCartImg = getByAltText('empty Box');
  expect(totalPrice).not.toBeInTheDocument();
  expect(emptyCart).toBeInTheDocument();
  expect(emptyCartImg).toBeInTheDocument();
});
