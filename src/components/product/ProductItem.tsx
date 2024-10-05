'use client';

import { Product } from '@/core';
import { IconShoppingCartPlus } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

export interface ProductItem {
  product: Product;
}

export default function ProductItem(props: ProductItem) {
  const { product } = props;
  return (
    <Link
      href={`/product/${product.id}`}
      className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]"
    >
      <div className="h-48 w-full relative">
        <Image
          src={product.image}
          alt="Imagem do produto"
          className="object-contain"
          fill
        />
      </div>
      <div className="flex-1 flex flex-col p-5 gap-3 border-t border-white/10">
        <span className="text-lg font-semibold">{product.name}</span>
        <span className="text-sm border-b border-dashed self-start">
          {product.specifications.highlight}
        </span>
        <div className="flex-1" />
        <div className="flex flex-col">
          <span className="text-sm text-grey-400 line-through">
            de {product.basePrice}
          </span>
          <span className="text-xl font-semibold text-emerald-400">
            por {product.promotionalPrice}
          </span>
        </div>
        <button
          className="
                flex justify-center h-8 items-center gap-2
                bg-violet-700 hover:border-2 border-emerald-400 rounded-full
            "
          onClick={(e: any) => {
            e.preventDefault();
            console.log('Adicionar ao carrinho');
          }}
        >
          <IconShoppingCartPlus size={20} />
          <span>Adicionar</span>
        </button>
      </div>
    </Link>
  );
}
