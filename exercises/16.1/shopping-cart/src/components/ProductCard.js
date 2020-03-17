import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProducts, removeProducts, addProductsUnit, removeProductsUnit } from '../actions';

class ProductCard extends Component {
  removeItem() {
    const { item, products, removeProduct } = this.props;
    const product = products.find((product) => product.id === item.id);
    removeProduct(product);
  }

  addItem() {
    const { addNewProduct, item } = this.props;
    const { price, name, thumbnail, id, available_quantity } = item;
    const product = {
      id,
      price,
      name,
      thumbnail,
      available_quantity,
      qtd: 1,
    };
    addNewProduct(product);
  }

  addUnit() {
    const { products, item, addProductUnit } = this.props;
    const product = products.find((product) => product.id === item.id);
    if (product.qtd < item.available_quantity) {
      product.qtd += 1;
      addProductUnit(product.price);
    }
  }

  removeUnit() {
    const { products, item, removeProductUnit } = this.props;
    const product = products.find((product) => product.id === item.id);
    if (product.qtd > 1) {
      product.qtd -= 1;
      removeProductUnit(product.price);
    }
  }

  createRemoveButton() {
    const { item, products } = this.props;
    const product = products.find((product) => product.id === item.id);
    return (
      <div className="show-btn-remove">
        <button
          type="button" className="buttonRemoveCart"
          onClick={() => this.removeItem()}
        > Remover Item
        </button>
        <div className="div-qtd">
          <button
            type="button" className="left"
            onClick={() => this.addUnit()}
            disabled={product.qtd === item.available_quantity}
            data-testid={`add-product${product.id}-unit`}
          > +
          </button>
          <div className="text-qtd">
            <span>{product.qtd}</span>
          </div>
          <button
            type="button" className="right"
            onClick={() => this.removeUnit()}
            disabled={product.qtd === 1}
            data-testid={`remove-product${product.id}-unit`}
          > -
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { item, products } = this.props;
    const { price, name, thumbnail } = item;
    const cartProduct = products.find((product) => product.id === item.id);
    const cardClass = ['card-product'];

    if (cartProduct) {
      cardClass.push('border');
    }
    return (
      <section className="content-center">
        <div className={cardClass.join(' ')}>
          <div className="title">
            <h3>{name}</h3>
            <p className="value">{`R$ ${price}`}</p>
          </div>
          <div className="info-product">
            <img className="img-product" alt="imagem do produto" src={thumbnail} />
          </div>
          { !cartProduct &&
            <button type="button" onClick={() => this.addItem()} className="buttonAddCart" >
              Adicionar Item
            </button>
          }
          {cartProduct && this.createRemoveButton()}
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ cartReducer: { products } }) => ({ products });

const mapDispatchToProps = (dispatch) => ({
  addNewProduct: (product) => dispatch(addProducts(product)),
  addProductUnit: (price) => dispatch(addProductsUnit(price)),
  removeProduct: (product) => dispatch(removeProducts(product)),
  removeProductUnit: (price) => dispatch(removeProductsUnit(price)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
