"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { sidebarLinks } from "@/constants/general.const";
import { TSidebarLink } from "@/types/general.types";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { IconLogout } from "./icons";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <motion.div
      className="flex flex-col w-full h-screen gap-6 p-4 text-lg"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
    >
      {sidebarLinks.map((link) => (
        <SidebarLink
          key={link.title}
          isActive={pathname.includes(link.path)}
          link={link}
        ></SidebarLink>
      ))}
      <Link
        href="/sign-in"
        className={cn(
          "flex items-center gap-5 font-bold text-zinc-500 hover:bg-zinc-300/50 hover:text-zinc-600 p-3 rounded-lg transition-all"
        )}
        onClick={() => {}}
      >
        <span>
          <IconLogout />
        </span>
        <span>Logout</span>
      </Link>
    </motion.div>
  );
}

interface SidebarLinkProps {
  link: TSidebarLink;
  isActive: boolean;
}

function SidebarLink({ link, isActive }: SidebarLinkProps) {
  return (
    <Link
      href={link.path}
      className={cn(
        "flex items-center gap-5 font-bold text-zinc-500 hover:bg-zinc-300/50 hover:text-zinc-600 p-3 rounded-lg transition-all",
        isActive
          ? "text-zinc-200 bg-slate-700 hover:text-zinc-200 hover:bg-slate-700"
          : ""
      )}
    >
      <span>{link.icon}</span>
      <span>{link.title}</span>
    </Link>
  );
}
