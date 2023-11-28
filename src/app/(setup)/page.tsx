"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { hasCookie } from "cookies-next";
const SetupPage = () => {
  useEffect(() => {
    if (hasCookie("token")) {
      return redirect("/home");
    }
  }, []);
  return redirect("/sign-in");
};

export default SetupPage;
