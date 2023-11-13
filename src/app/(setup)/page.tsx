"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";

const SetupPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const profile = true;
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      return redirect("/home");
    } else {
      return redirect("/sign-in");
    }
  }, [token]);
  return (
    <Link
      className="flex items-center justify-center m-auto"
      // href="https://mail.google.com/mail/u/0/#inbox"
      href="/sign-in"
    >
      click me
    </Link>
  );
};

export default SetupPage;
