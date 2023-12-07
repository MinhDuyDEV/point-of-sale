"use client";

import axios from "axios";
import { getCookie } from "cookies-next";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const OrderDetailPage = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const token = getCookie("token");
  useEffect(() => {
    async function fetchOrder() {
      try {
        const response = await axios.get(
          `/api/orders/employee/${params.userId}`,
          {
            baseURL: "http://localhost:3000",
            headers: {
              "Content-Type": "Application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data.orders);
        console.log(
          "🚀 ~ fetchOrder ~ response.data.orders:",
          response.data.orders
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchOrder();
  }, [params.userId, token]);
  console.log("🚀 ~ fetchOrder ~ params.userId:", params.userId);
  if (!data) {
    return null;
  }
  return (
    <div className="flex flex-wrap items-start justify-between gap-8 mt-8">
      {data.map((order: any) => (
        <div
          key={order._id}
          className="px-6 py-8 mx-auto bg-white border rounded-lg shadow-lg"
        >
          <h1 className="my-4 text-2xl font-bold text-center text-blue-600">
            POS Services
          </h1>
          <hr className="mb-2" />
          <div className="flex justify-between mb-6">
            <h1 className="text-lg font-bold">Invoice</h1>
            <div className="text-gray-700">
              <div>Date: {order.createdAt.split("T")[0]}</div>
              <div>Invoice #: {order._id.slice(0, 7)}...</div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-bold">Bill To:</h2>
            <div className="mb-2 text-gray-700">{order.CustomerName}</div>
            <div className="mb-2 text-gray-700">
              Address: {order.Customer.Address}
            </div>
            <div className="text-gray-700">
              Phone: {order.CustomerPhoneNumber}
            </div>
          </div>
          <table className="w-full mb-8">
            <thead>
              <tr>
                <th className="font-bold text-left text-gray-700">
                  Description
                </th>
                <th className="font-bold text-right text-gray-700">Amount</th>
              </tr>
            </thead>
            <tbody>
              {order.OrderDetails.length > 0 &&
                order.OrderDetails.map((item: any) => (
                  <tr key={item._id}>
                    <td className="text-left text-gray-700">
                      Product {item.Product?.Name}
                    </td>
                    <td className="text-right text-gray-700">
                      $${item.Product?.RetailPrice}
                    </td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="font-bold text-left text-gray-700">Total</td>
                <td className="font-bold text-right text-gray-700">
                  ${order.TotalAmount}
                </td>
              </tr>
              <tr>
                <td className="font-bold text-left text-gray-700">
                  Customer given
                </td>
                <td className="font-bold text-right text-gray-700">
                  ${order.AmountPaidByCustomer}
                </td>
              </tr>
              <tr>
                <td className="font-bold text-left text-gray-700">Change</td>
                <td className="font-bold text-right text-gray-700">
                  ${order.ChangeReturnedToCustomer}
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="mb-2 text-gray-700">Thank you for your business!</div>
        </div>
      ))}
    </div>
  );
};

export default OrderDetailPage;
