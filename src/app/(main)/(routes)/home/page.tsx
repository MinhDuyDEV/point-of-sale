"use client";

import React, { useEffect } from "react";
import { getCookie } from "cookies-next";

export function Page() {
  useEffect(() => {
    let value;
    value = getCookie("user");
  }, []);
  return <div className="">Home page</div>;
}

export default Page;
