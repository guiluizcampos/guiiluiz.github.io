import React from 'react';
import { connect } from 'react-redux';
import { removeProducts } from '../actions';

function ItemCart({ products, item, removeProduct }) {
  const itemQuantity = products.find((product) => product.name === item.name).qtd;
  return (
    <div className="content-shopcart">
    <button type="button" className="btn" onClick={() => removeProduct(item)}>X</button>
    <div className="div-img">
      <img className="img-product-car" src={item.thumbnail} alt="product" />
    </div>
    <p className="name-product">{item.name}</p>
    <div className="qtd-product">
      <p>{itemQuantity}</p>
      <p>{`Available  ${item.available_quantity}`}</p>
    </div>
    <span className="total">
      {`R$ ${parseFloat((item.price * itemQuantity).toFixed(2))}`}
    </span>
    </div>
  );
}

const mapStateToProps = ({ cartReducer: { products } }) => ({ products });

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (product) => dispatch(removeProducts(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemCart);
