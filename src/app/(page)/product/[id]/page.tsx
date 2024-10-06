'use client';

import PriceMeter from '@/components/product/PriceMeter';
import ProductInformations from '@/components/product/ProductInformations';
import ProductNotFound from '@/components/product/ProductNotFound';
import ProductPurchaseBanner from '@/components/product/ProductPurchaseBanner';
import ProductTitle from '@/components/product/ProductTitle';
import SpecializedAssessment from '@/components/product/SpecializedAssessment';
import UserReviews from '@/components/product/UserReviews';
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

  return product ? (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-10">
        <ProductTitle product={product} />
        <ProductInformations product={product} />
        <ProductPurchaseBanner product={product} />
        <PriceMeter product={product} />
      </div>
      <UserReviews product={product} />
      <SpecializedAssessment product={product} />
    </div>
  ) : (
    <ProductNotFound />
  );
}
