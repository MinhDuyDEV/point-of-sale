"use client";

import { User } from "@/types/general.types";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Lock, Unlock } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const UserPage = ({ params }: { params: { userId: string } }) => {
  const [user, setUser] = useState<User | null>(null);
  const [data, setData] = useState([]);
  const token = getCookie("token");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const onLock = async (id: string | undefined) => {
    const token = getCookie("token");
    try {
      setLoading(true);
      const response = await axios.patch(
        `http://localhost:3000/api/users/lock/${id}`,
        {},
        {
          baseURL: "http://localhost:3000",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "Application/json",
          },
        }
      );
      toast.success(`${response.data.message}`);
      router.back();
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchProduct() {
      try {
        const response = await axios.get(`/api/users/${params.userId}`, {
          baseURL: "http://localhost:3000",
          headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
      } catch (error) {
        console.log(error);
      }
    }
    fetchOrder();
  }, [params.userId, token]);
  console.log(data);
  return (
    <motion.div
      className="h-auto px-8 py-6 mx-auto"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="flex items-center justify-between mb-3 gap-x-6">
        <Heading
          title="User Profile"
          description={`Profile ${user?.Fullname}`}
        ></Heading>
        <div className="flex items-center justify-center gap-x-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src={user?.Profile_Picture} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Button
            onClick={() => onLock(user?.id)}
            disabled={loading}
            variant={user?.IsLocked ? "destructive" : "ghost"}
          >
            {user?.IsLocked ? <Lock /> : <Unlock />}
          </Button>
        </div>
      </div>
      <Separator />
      <DataTable
        columns={columns}
        data={data}
        searchKey="CustomerPhoneNumber"
      />
    </motion.div>
  );
};

export default UserPage;
