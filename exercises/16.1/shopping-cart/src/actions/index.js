export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
export const ADD_PRODUCT_UNIT = 'ADD_PRODUCT_UNIT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const REMOVE_PRODUCT_UNIT = 'REMOVE_PRODUCT_UNIT';

export const addProducts = (product) => ({
  type: ADD_NEW_PRODUCT,
  product,
});

export const addProductsUnit = (price) => ({
  type: ADD_PRODUCT_UNIT,
  price,
});

export const removeProducts = (product) => ({
  type: REMOVE_PRODUCT,
  product,
});

export const removeProductsUnit = (price) => ({
  type: REMOVE_PRODUCT_UNIT,
  price,
});
