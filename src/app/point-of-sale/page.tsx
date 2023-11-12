"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import ProductList from "@/components/point-of-sale/product/product-list";
import { Product } from "@/types/types";
import CartItem from "@/components/point-of-sale/cart/cart-item";

const data = [
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

const PointOfSalePage = () => {
  const cart = useCart();
  const totalPrice = cart.items.reduce((total, item) => {
    return total + Number(item.RetailPrice) * item.Quantity;
  }, 0);
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex items-center gap-5 w-[700px] mt-8 border border-gray-200 rounded-lg py-3 px-5 mx-auto">
        <span className="flex-shrink-0 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          type="text"
          className="w-full bg-transparent outline-none"
          placeholder="Enter your product..."
        />
      </div>

      <div className="grid grid-cols-4">
        <div className="flex flex-col col-span-3 px-4 gap-y-8 sm:px-6 lg:px-8">
          <ProductList data={data} />
        </div>
        {/* start cart */}
        <div className="flex flex-col gap-y-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="px-4 py-6 rounded-lg bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
            {cart.items.length === 0 && (
              <p className="text-neutral-500">No items added to cart.</p>
            )}
            <ul className="flex flex-col gap-y-2">
              {cart.items.map((item: Product) => (
                <CartItem key={item.id} data={item} />
              ))}
            </ul>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between pt-4 border-gray-200">
                <div className="text-base font-medium text-gray-900">
                  Order total
                </div>
                <Currency value={totalPrice} />
              </div>
            </div>
            <Button
              // onClick={onCheckout}
              disabled={cart.items.length === 0}
              className="w-full mt-6"
            >
              Checkout
            </Button>
          </div>
        </div>
        {/* end cart */}
      </div>
    </div>
  );
};

export default PointOfSalePage;
