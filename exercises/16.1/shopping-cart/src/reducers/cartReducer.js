import {
  ADD_NEW_PRODUCT,
  ADD_PRODUCT_UNIT,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_UNIT,
} from '../actions';

const initialState = {
  products: [],
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.product],
        totalPrice: state.totalPrice + action.product.price,
      };
    case ADD_PRODUCT_UNIT:
      return {
        ...state,
        products: [...state.products],
        totalPrice: state.totalPrice + action.price,
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.product.id),
        totalPrice: state.totalPrice - action.product.price * action.product.qtd,
      };
    case REMOVE_PRODUCT_UNIT:
      return {
        ...state,
        products: [...state.products],
        totalPrice: state.totalPrice - action.price,
      };
    default:
      return state;
  }
};

export default cartReducer;
