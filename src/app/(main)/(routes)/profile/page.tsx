"use client";

import { Product, User } from "@/types/general.types";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AtSign, BaggageClaim, User as UserIcon } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [data, setData] = useState([]);
  const token = getCookie("token");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const info = getCookie("user");
  useEffect(() => {
    window.scrollTo(0, 0);
    if (info) {
      setUser(JSON.parse(info));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    async function fetchProduct(id: string) {
      try {
        const response = await axios.get(`/api/orders/employee/${id}`, {
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
    if (user) {
      fetchProduct(user.id);
    }
  }, [router, token, user]);

  return (
    <motion.div
      className="flex justify-between h-auto gap-24 px-8 py-6 mx-auto md:justify-start"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="flex items-center justify-center flex-shrink-0 w-full gap-40 p-6 mb-8 shadow-lg rounded-xl bg-slate-50">
        <div className="flex items-center justify-center w-[200px] h-[200px] gap-x-3">
          <Avatar className="w-48 h-48">
            <AvatarImage src={user?.Profile_Picture} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col items-start justify-center p-4 gap-y-4">
          <div className="flex items-start justify-center gap-x-3">
            <UserIcon />
            <h3 className="text-lg text-zinc-800">{user?.Fullname}</h3>
          </div>
          <div className="flex items-start justify-center gap-x-3">
            <AtSign />
            <h3 className="text-lg text-zinc-800">{user?.Email}</h3>
          </div>
          {user?.Role !== "admin" && (
            <div className="flex items-start justify-center gap-x-3">
              <BaggageClaim />
              <h3 className="text-lg text-zinc-800">{user?.Orders.length}</h3>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePage;
