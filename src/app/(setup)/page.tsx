"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const profile = true;
  if (profile) {
    return redirect("/home");
  }
  return (
    <Link
      className="flex items-center justify-center m-auto"
      href="https://mail.google.com/mail/u/0/#inbox"
    >
      click me
    </Link>
  );
};

export default page;
