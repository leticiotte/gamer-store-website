'use client';
import { Product } from '@/core';
import { useEffect, useState } from 'react';

const baseUrl = 'http://localhost:3030/products';

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  async function findAll(): Promise<Product[]> {
    const response = await fetch(`${baseUrl}`);

    return await response.json();
  }

  async function findById(id: number): Promise<Product> {
    const response = await fetch(`${baseUrl}/${id}`);

    return (await response.json()) ?? null;
  }

  useEffect(() => {
    findAll().then(setProducts);
  }, []);

  return { products, findById };
}
