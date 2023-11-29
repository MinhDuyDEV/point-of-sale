"use client";

import { Product } from "@/types/general.types";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import Heading from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";

export default function DemoPage() {
  // const data = await getData();
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = getCookie("token");
    async function fetchProduct() {
      try {
        const response = await axios.get("/api/products", {
          baseURL: "http://localhost:3000",
          headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("🚀 ~ fetchProduct ~ response.data:", response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const router = useRouter();
  return (
    <div className="px-8 py-10 mx-auto">
      <div className="flex items-center justify-between">
        <Heading
          title={`Products (${data.length})`}
          description="Manage product for your store"
        ></Heading>
        <Button onClick={() => router.push(`/products/new`)}>
          <Plus className="w-4 h-4 mr-2"></Plus>
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="Name" />
    </div>
  );
}
