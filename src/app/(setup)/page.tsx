"use client";

import { redirect, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { User } from "@/types/general.types";
const SetupPage = () => {
  const params = useSearchParams();
  const [user, setUser] = useState<User | null>(null);
  // setCookie("token", params.get("token"));
  // useEffect(() => {
  //   const info = getCookie("user");
  //   if (info) {
  //     setUser(JSON.parse(info));
  //   }
  //   console.log("🚀 ~ SetupPage ~ user:", user);
  // }, [user]);
  if (hasCookie("token")) {
    return redirect("/customers");
  } else if (hasCookie("token")) {
    return <div>change password</div>;
  } else {
    return redirect("/sign-in");
  }
};

export default SetupPage;
