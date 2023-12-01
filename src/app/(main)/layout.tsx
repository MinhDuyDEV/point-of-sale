"use client";

import Logo from "@/components/Logo";
import Sidebar from "@/components/Sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SearchBar from "@/components/SearchBar";
import { getCookie, hasCookie } from "cookies-next";
import { User } from "@/types/general.types";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    if (!hasCookie("token")) {
      return redirect("/sign-in");
    }
    const user = getCookie("user");
    if (user) {
      setUser(JSON.parse(user?.toString()));
    }
  }, []);
  return (
    <div className="w-full h-full">
      <motion.div
        className="flex items-center justify-between w-full h-full px-8 py-6"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="">
          <Logo></Logo>
        </div>
        <div>
          <SearchBar></SearchBar>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <p className="text-2xl capitalize font-semibold">{user?.Fullname}</p>
          <Avatar className="w-12 h-12">
            <AvatarImage src={user?.Profile_Picture} alt="avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </motion.div>
      <div className="grid grid-cols-[250px_minmax(0,1fr)] max-h-screen">
        <Sidebar />
        <div className="h-screen px-6">{children} </div>
      </div>
    </div>
  );
};

export default Layout;
