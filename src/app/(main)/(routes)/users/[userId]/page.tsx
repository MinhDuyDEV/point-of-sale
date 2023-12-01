"use client";

import React, { useEffect, useState } from "react";
import UserForm from "./user-form";
import { getCookie } from "cookies-next";
import axios from "axios";
import { User } from "@/types/general.types";

const UserPage = ({ params }: { params: { userId: string } }) => {
  // const user = {
  //   Barcode: "123456789",
  //   Category: "Electronics",
  //   Flag: 0,
  //   Image: "https://example.com/images/smartphone-x.jpg",
  //   ImportPrice: 300,
  //   Name: "IphoneX",
  //   Quantity: 50,
  //   RetailPrice: 500,
  //   _id: "65674bbc45a2676209906eb9",
  // };
  const [user, setUser] = useState<User | null>(null);
  console.log("🚀 ~ UserPage ~ params.userId:", params.userId);
  useEffect(() => {
    const token = getCookie("token");
    async function fetchProduct() {
      try {
        const response = await axios.get(`/api/users/${params.userId}`, {
          baseURL: "http://localhost:3000",
          headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("🚀 ~ fetchProduct ~ response.data:", response.data);
        setUser(response.data);
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
        <UserForm initialData={user}></UserForm>
      </div>
    </div>
  );
};

export default UserPage;
