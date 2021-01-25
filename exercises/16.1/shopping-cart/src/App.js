import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/ProductList';
import ShopCart from './components/ShopCart';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="content-center">
        <h1>Lojinha do Gui</h1>
        <ProductList />
        <ShopCart />
        <h6>Design: @conrado_medeiros</h6>
      </div>
    </Provider>
  );
}

export default App;
