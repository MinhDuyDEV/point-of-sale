"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { getCookie, hasCookie } from "cookies-next";
import { User } from "@/types/general.types";
const SetupPage = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const info = getCookie("user");
    if (info) {
      setUser(JSON.parse(info));
    }
    console.log("🚀 ~ SetupPage ~ user:", user);
  }, [user]);
  if (hasCookie("token") && user?.IsActive === true) {
    return redirect("/home");
  } else {
    return <div>change password</div>;
  }
};

export default SetupPage;
