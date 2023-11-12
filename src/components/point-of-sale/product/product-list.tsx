"use client";

import React from "react";
import ProductCard from "./product-card";
import { Product } from "@/types/types";

interface ProductListProps {
  data: Product[];
}

const dataFake = [
  {
    id: "1",
    Name: "IPhone",
    Category: "Phone",
    RetailPrice: 20,
    Quantity: 1,
  },
  {
    id: "2",
    Name: "Samsung",
    Category: "Phone",
    RetailPrice: 50,
    Quantity: 1,
  },
];
const ProductList = ({ data = dataFake }: ProductListProps) => {
  return (
    <div className="space-y-4">
      <h3 className="mb-8 text-3xl font-bold">Products</h3>
      {/* {items.length === 0 && <NoResults />} */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* start */}
        {data.length >= 0 &&
          data.map((item: Product) => {
            return <ProductCard key={item.id} data={item} />;
          })}
        {/* end */}
      </div>
    </div>
  );
};

export default ProductList;
