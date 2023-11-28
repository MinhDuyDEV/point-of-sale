"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import React, { useEffect } from "react";
import { getCookie } from "cookies-next";

export function Page() {
  const tags = Array.from({ length: 20 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );
  useEffect(() => {
    let value;
    value = getCookie("user");
  }, []);
  return <div className="">Home page</div>;
}

export default Page;
