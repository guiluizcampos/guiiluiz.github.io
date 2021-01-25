import React from 'react';
import CartItem from './CartItem.js';
import emptyBox from '../image/empty-box.png';
import { connect } from 'react-redux';

function ShopCart({ products, totalPrice }) {
  if (products.length === 0) {
    return (
    <div className="content-center">
        <img src={emptyBox} alt="empty Box" className="div-img" />
        <p>Seu Carrinho Está Vazio</p>
    </div>
    );
  }
  return (
    <div className="Cart-Product-List">
    <div className="list-itens">
        {products.map((product) =>
          <CartItem
            key={product.id}
            item={product}
          />)}
    </div>
    <h4 className="total-price">
        {`Valor Total da Compra: R$ ${totalPrice}`}
    </h4>
    </div>
  );
}

const mapStateToProps = ({ cartReducer: { products, totalPrice } }) => ({ products, totalPrice });

export default connect(mapStateToProps)(ShopCart);
