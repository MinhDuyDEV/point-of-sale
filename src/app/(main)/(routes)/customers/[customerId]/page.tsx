"use client";

import React, { useEffect, useState } from "react";
import CustomerForm from "./customer-form";
import { getCookie } from "cookies-next";
import axios from "axios";
import { Customer } from "@/types/general.types";

const CustomerPage = ({ params }: { params: { customerId: string } }) => {
  const [customer, setCustomer] = useState<Customer | null>(null);
  useEffect(() => {
    const token = getCookie("token");
    async function fetchCustomer() {
      try {
        const response = await axios.get(
          `/api/customers/${params.customerId}`,
          {
            baseURL: "http://localhost:3000",
            headers: {
              "Content-Type": "Application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCustomer(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCustomer();
  }, [params.customerId]);
  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        {customer && <CustomerForm initialData={customer}></CustomerForm>}
        {!customer && <CustomerForm initialData={customer}></CustomerForm>}
      </div>
    </div>
  );
};

export default CustomerPage;
