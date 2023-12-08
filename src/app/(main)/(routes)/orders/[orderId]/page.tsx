"use client";

import { User } from "@/types/general.types";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const OrderDetailPage = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [user, setUser] = useState<User>();
  const token = getCookie("token");
  useEffect(() => {
    const user = getCookie("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);
  useEffect(() => {
    console.log("🚀 ~ fetchOrder ~ user?.id:", user?.id);
    async function fetchOrder() {
      try {
        const response = await axios.get(`/api/orders/employee/${user?.id}`, {
          baseURL: "http://localhost:3000",
          headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data.orders);
        console.log(
          "🚀 ~ fetchOrder ~ response.data.orders:",
          response.data.orders
        );
      } catch (error) {
        console.log(error);
      }
    }
    if (user) {
      fetchOrder();
    }
  }, [token, user]);
  if (!data) {
    return null;
  }
  return (
    <div className="flex flex-wrap items-start justify-between gap-5">
      {data
        .filter((order: any) => order._id === params.orderId)
        .map((order: any) => (
          <div
            key={order._id}
            className="bg-white rounded-lg shadow-lg px-8 py-10 w-[600px] mx-auto"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="text-gray-700 font-bold text-2xl">
                  POS Services
                </div>
              </div>
              <div className="text-gray-700">
                <div className="font-bold text-xl mb-2">INVOICE</div>
                <div className="text-sm">
                  Date: {order.createdAt.split("T")[0]}
                </div>
                <div className="text-sm">
                  Invoice #: {order._id.slice(0, 7)}...
                </div>
              </div>
            </div>
            <div className="border-b-2 border-gray-300 pb-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Bill To:</h2>
              <div className="text-gray-700 mb-2">{order.CustomerName}</div>
              <div className="text-gray-700 mb-2">
                Address: {order.Customer.Address}
              </div>
              <div className="text-gray-700">
                Phone: {order.CustomerPhoneNumber}
              </div>
            </div>
            <table className="w-full text-left mb-8">
              <thead>
                <tr>
                  <th className="text-gray-700 font-bold uppercase py-2">
                    Description
                  </th>
                  <th className="text-gray-700 font-bold uppercase py-2">
                    Quantity
                  </th>
                  <th className="text-gray-700 font-bold uppercase py-2">
                    Price
                  </th>
                  <th className="text-gray-700 font-bold uppercase py-2">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {order.OrderDetails.length > 0 &&
                  order.OrderDetails.map((item: any) => (
                    <tr key={item._id}>
                      <td className="py-4 text-gray-700">
                        Product {item.Product?.Name}
                      </td>
                      <td className="py-4 text-gray-700">{item?.Quantity}</td>
                      <td className="py-4 text-gray-700">
                        ${item.Product?.RetailPrice}
                      </td>
                      <td className="py-4 text-gray-700">
                        {item.Product?.RetailPrice * item?.Quantity}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="flex justify-end mb-8">
              <div className="text-gray-700 mr-2">Total:</div>
              <div className="text-gray-700 font-bold text-xl">
                ${order.TotalAmount}
              </div>
            </div>
            <div className="flex justify-end mb-8">
              <div className="text-gray-700 mr-2">Cus given:</div>
              <div className="text-gray-700 font-bold text-xl">
                ${order.AmountPaidByCustomer}
              </div>
            </div>
            <div className="flex justify-end mb-8 ">
              <div className="text-gray-700 mr-2">Change:</div>
              <div className="text-gray-700 font-bold text-xl">
                ${order.ChangeReturnedToCustomer}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default OrderDetailPage;
