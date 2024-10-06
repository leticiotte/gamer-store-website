import { Product } from '@/core';
import { IconTag } from '@tabler/icons-react';
import Tag from '../shared/Tag';

export interface ProductSpecificationsProps {
  product: Product;
}

export default function ProductSpecifications(
  props: ProductSpecificationsProps
) {
  const { product } = props;
  return (
    <div className="flex-1 flex flex-col gap-1">
      <div className="flex mb-3">
        <Tag
          label={product.specifications.highlight!}
          icon={IconTag}
          outlined
        />
      </div>
      {product.specifications &&
        Object.keys(product.specifications)
          .filter((k) => k !== 'highlight')
          .map((chave) => (
            <div key={chave} className="flex gap-1">
              <span className="p-2 w-1/3 bg-white/5 rounded">{chave}</span>
              <span className="p-2 w-2/3 bg-white/5 rounded">
                {product.specifications[chave]}
              </span>
            </div>
          ))}
    </div>
  );
}
