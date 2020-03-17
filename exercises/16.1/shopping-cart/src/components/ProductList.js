import React from 'react';
import ProductCard from './ProductCard';

function ProductList() {
  const productList = [
    { id: 0, name: 'Secador de Cabelo', price: 80.00, available_quantity: 3,thumbnail: 'data:image/jpeg;base64,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' },
    { id: 1, name: 'Fone de Ouvido JBL', price: 70.00, available_quantity: 11, thumbnail: 'data:image/png;base64,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' },
    { id: 2, name: 'Mouse Gamer', price: 120.00, available_quantity: 2, thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmTgT1QI7zGFCzz5bSihU_2mfl1BA7VCkglTfsxe0v7pQMA0S4' },
    { id: 3, name: 'Carregador de Iphone', price: 65.00, available_quantity: 5, thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRubqtALVZUPh1HM4Yc6KU_u8AYId9RQ-lGjxkmOdCKTRkEdK8gcEhRKaukQ3oj6b57-f-2HWA&usqp=CAc' }
  ];

  return (
    <div className="ProductList">
      {productList.map((product) => <ProductCard key={product.id} item={product} />)}
    </div>
  );
}

export default ProductList;
