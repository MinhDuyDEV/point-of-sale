"use client";

import React from "react";
import ProductCard from "./product-card";
import { Product } from "@/types/types";
import { motion } from "framer-motion";
import NoResults from "@/components/ui/no-results";

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
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h3 className="mb-8 text-3xl font-bold">Products</h3>
      {data.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* start */}
        {data.length >= 0 &&
          data.map((item: Product) => {
            return <ProductCard key={item.id} data={item} />;
          })}
        {/* end */}
      </div>
    </motion.div>
  );
};

export default ProductList;
