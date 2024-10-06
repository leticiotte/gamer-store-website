'use client';

import { Product } from '@/core';
import useProducts from '@/data/hooks/useProducts';
import { useEffect, useState } from 'react';

export interface ProductPageProps {
  product: Product;
}

export default function ProductPage(props: any) {
  const { findById } = useProducts();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    findById(+props.params.id).then(setProduct);
  }, [props.params.id]);

  const id = +props.params.id;
  return product ? (
    <div>
      <h1>Página do produto de id {id}</h1>
      <h2>Produto: {product?.name}</h2>
    </div>
  ) : (
    <div>Produto não encontrado!</div>
  );
}
