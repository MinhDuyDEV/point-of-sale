"use client";

import Sidebar from "@/components/Sidebar";
import { redirect } from "next/navigation";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const profile = true;
  if (!profile) {
    return redirect("/sign-in");
  }
  return (
    <div className="w-full h-screen bg-neutral-300/30">
      <div className="grid grid-cols-[250px_minmax(0,1fr)] min-h-screen">
        <div>
          <Sidebar />
        </div>
        <div className="h-screen">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
