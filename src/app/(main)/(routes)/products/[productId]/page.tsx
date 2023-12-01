"use client";

import React, { useEffect, useState } from "react";
import ProductForm from "./product-form";
import { getCookie } from "cookies-next";
import axios from "axios";

const ProductPage = ({ params }: { params: { productId: string } }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const token = getCookie("token");
    async function fetchProduct() {
      try {
        const response = await axios.get(`/api/products/${params.productId}`, {
          baseURL: "http://localhost:3000",
          headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("🚀 ~ fetchProduct ~ response.data:", response.data);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <ProductForm initialData={product}></ProductForm>
      </div>
    </div>
  );
};

export default ProductPage;
