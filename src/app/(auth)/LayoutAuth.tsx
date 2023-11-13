"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const LayoutAuth = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      router.push("/home");
    } else {
      router.push("/sign-in");
    }
  }, [router, token]);
  return <>{children}</>;
};

export default LayoutAuth;
