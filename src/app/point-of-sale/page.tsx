"use client";

import { Expand, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import React, { MouseEventHandler } from "react";
import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import { ScrollArea } from "@/components/ui/scroll-area";
import usePreviewModal from "@/hooks/use-preview-modal";

const PointOfSalePage = () => {
  const previewModal = usePreviewModal();
  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen();
  };
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
          <div className="space-y-4">
            <h3 className="mb-8 text-3xl font-bold">Products</h3>
            {/* {items.length === 0 && <NoResults />} */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* start */}
              <div className="p-3 space-y-4 bg-white border cursor-pointer group rounded-xl">
                {/* Image & actions */}
                <div className="relative bg-gray-100 aspect-square rounded-xl">
                  <Image
                    src="https://source.unsplash.com/random"
                    alt=""
                    fill
                    className="object-cover rounded-md aspect-square"
                  />
                  <div className="absolute w-full px-6 transition opacity-0 group-hover:opacity-100 bottom-5">
                    <div className="flex justify-center gap-x-6">
                      <IconButton
                        onClick={onPreview}
                        icon={<Expand size={20} className="text-gray-600" />}
                      />
                      <IconButton
                        // onClick={onAddToCart}
                        icon={
                          <ShoppingCart size={20} className="text-gray-600" />
                        }
                      />
                    </div>
                  </div>
                </div>
                {/* Description */}
                <div>
                  <p className="text-lg font-semibold">Name</p>
                  <p className="text-sm text-gray-500">Category</p>
                </div>
                {/* Price & Reiew */}
                <div className="flex items-center justify-between">
                  <Currency value={0} />
                </div>
              </div>
              {/* end */}
            </div>
          </div>
        </div>
        {/* start cart */}
        <div className="flex flex-col gap-y-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="px-4 py-6 rounded-lg bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
            <ScrollArea className="w-full h-auto">
              <ul className="flex flex-col gap-y-2">
                {/* start item */}
                <li className="flex py-6 border-b">
                  <div className="relative w-16 h-16 overflow-hidden rounded-md sm:h-24 sm:w-24">
                    <Image
                      fill
                      src="https://source.unsplash.com/random"
                      alt=""
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="relative flex flex-col justify-between flex-1 ml-4 sm:ml-6">
                    <div className="absolute top-0 right-0 z-10">
                      <IconButton
                        // onClick={onRemove}
                        icon={<X size={15} />}
                      />
                    </div>
                    <div className="relative sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div className="flex flex-col items-start gap-y-4">
                        <p className="text-base font-semibold text-black ">
                          {/* {data.name} */}
                          Name item
                        </p>
                        <Currency value={0} />
                      </div>
                    </div>
                  </div>
                </li>
                {/* end item */}
                {/* start item */}
                <li className="flex py-6 border-b">
                  <div className="relative w-16 h-16 overflow-hidden rounded-md sm:h-24 sm:w-24">
                    <Image
                      fill
                      src="https://source.unsplash.com/random"
                      alt=""
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="relative flex flex-col justify-between flex-1 ml-4 sm:ml-6">
                    <div className="absolute top-0 right-0 z-10">
                      <IconButton
                        // onClick={onRemove}
                        icon={<X size={15} />}
                      />
                    </div>
                    <div className="relative sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div className="flex flex-col items-start gap-y-4">
                        <p className="text-base font-semibold text-black ">
                          {/* {data.name} */}
                          Name item
                        </p>
                        <Currency value={0} />
                      </div>
                    </div>
                  </div>
                </li>
                {/* end item */}
                {/* start item */}
                <li className="flex py-6 border-b">
                  <div className="relative w-16 h-16 overflow-hidden rounded-md sm:h-24 sm:w-24">
                    <Image
                      fill
                      src="https://source.unsplash.com/random"
                      alt=""
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="relative flex flex-col justify-between flex-1 ml-4 sm:ml-6">
                    <div className="absolute top-0 right-0 z-10">
                      <IconButton
                        // onClick={onRemove}
                        icon={<X size={15} />}
                      />
                    </div>
                    <div className="relative sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div className="flex flex-col items-start gap-y-4">
                        <p className="text-base font-semibold text-black ">
                          {/* {data.name} */}
                          Name item
                        </p>
                        <Currency value={0} />
                      </div>
                    </div>
                  </div>
                </li>
                {/* end item */}
              </ul>
            </ScrollArea>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between pt-4 border-gray-200">
                <div className="text-base font-medium text-gray-900">
                  Order total
                </div>
                <Currency value={0} />
              </div>
            </div>
            <Button
              // onClick={onCheckout}
              // disabled={items.length === 0}
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
