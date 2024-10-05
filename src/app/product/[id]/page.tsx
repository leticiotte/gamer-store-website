import { Product, products } from '@/core';

export interface ProductPageProps {
  product: Product;
}

export default function ProductPage(props: any) {
  const id = +props.params.id;
  const product = products.find((p) => p.id === id);
  return product ? (
    <div>
      <h1>Página do produto de id {id}</h1>
      <h2>Produto: {product?.name}</h2>
    </div>
  ) : (
    <div>Produto não encontrado!</div>
  );
}
