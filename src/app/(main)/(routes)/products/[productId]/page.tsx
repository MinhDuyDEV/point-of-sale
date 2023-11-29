import React from "react";
import ProductForm from "./product-form";

const ProductPage = ({ params }: { params: { billboardId: string } }) => {
  const product = {
    Barcode: "123456789",
    Category: "Electronics",
    Flag: 0,
    Image: "https://example.com/images/smartphone-x.jpg",
    ImportPrice: 300,
    Name: "IphoneX",
    Quantity: 50,
    RetailPrice: 500,
    _id: "65674bbc45a2676209906eb9",
  };
  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <ProductForm initialData={product}></ProductForm>
      </div>
    </div>
  );
};

export default ProductPage;
