"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";

const SetupPage = () => {
  const profile = true;
  if (profile) {
    return redirect("/home");
  }
  return (
    <div>
      <Link
        className="flex items-center justify-center m-auto"
        // href="https://mail.google.com/mail/u/0/#inbox"
        href="/sign-in"
      >
        click me
      </Link>
    </div>
  );
};

export default SetupPage;
