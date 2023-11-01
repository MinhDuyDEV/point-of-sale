"use client";

import Logo from "@/components/Logo";
import Sidebar from "@/components/Sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { redirect } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import SearchBar from "@/components/SearchBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const profile = true;
  if (!profile) {
    return redirect("/sign-in");
  }
  return (
    <div className="w-full h-screen bg-neutral-300/30">
      <motion.div
        className="flex items-center justify-between w-full px-8 py-6"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="">
          <Logo></Logo>
        </div>
        <div>
          <SearchBar></SearchBar>
        </div>
        <div className="flex items-center justify-center gap-x-3">
          <p>Minh Duy</p>
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </motion.div>
      <div className="grid grid-cols-[250px_minmax(0,1fr)] min-h-screen">
        <Sidebar />
        <div className="h-screen p-8">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
