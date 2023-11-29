"use client";

import { User } from "@/types/general.types";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";

async function getData(): Promise<User[]> {
  // Fetch data from your API here.
  return [
    {
      Orders: [],
      Email: "employee1@gmail.com",
      Fullname: "Nguyen Van 1",
      Role: "employee",
      Profile_Picture:
        "https://s.gravatar.com/avatar/75315b0e987e02688468fe059efece11?s=100&r…",
      IsOnline: true,
      IsLocked: false,
      IsActive: true,
      id: "65106f2f57404a40a54a7f3e",
    },
    {
      Orders: [],
      Email: "employee2@gmail.com",
      Fullname: "Nguyen Van 2",
      Role: "employee",
      Profile_Picture:
        "https://s.gravatar.com/avatar/75315b0e987e02688468fe059efece11?s=100&r…",
      IsOnline: false,
      IsLocked: false,
      IsActive: true,
      id: "65106f2f57404a40a54a7f3f",
    },
    {
      Orders: [],
      Email: "employee5@gmail.com",
      Fullname: "Nguyen Van Tan",
      Role: "employee",
      Profile_Picture:
        "https://s.gravatar.com/avatar/75315b0e987e02688468fe059efece11?s=100&r…",
      IsOnline: false,
      IsLocked: false,
      IsActive: true,
      id: "65106f2f57404a40a54a7f42",
    },
    {
      Orders: [],
      Email: "employee4@gmail.com",
      Fullname: "Nguyen Van 4",
      Role: "employee",
      Profile_Picture:
        "https://s.gravatar.com/avatar/75315b0e987e02688468fe059efece11?s=100&r…",
      IsOnline: false,
      IsLocked: false,
      IsActive: true,
      id: "65106f2f57404a40a54a7f41",
    },
    {
      Orders: [],
      Email: "employee3@gmail.com",
      Fullname: "Nguyen Van 3",
      Role: "employee",
      Profile_Picture:
        "https://s.gravatar.com/avatar/75315b0e987e02688468fe059efece11?s=100&r…",
      IsOnline: false,
      IsLocked: false,
      IsActive: true,
      id: "65106f2f57404a40a54a7f40",
    },
    {
      Email: "taikhoanlmng1@gmail.com",
      Fullname: "Nguyen Van Tan",
      Role: "employee",
      Profile_Picture:
        "https://s.gravatar.com/avatar/253bf7668a3e9e8a715b7351d230c4c8?s=100&r=x&d=retro",
      IsOnline: false,
      IsLocked: false,
      IsActive: false,
      Orders: [],
      id: "65106f769138348b718c2894",
    },
    {
      Email: "taikhoanlmng11@gmail.com",
      Fullname: "Nguyen Van Tan",
      Role: "employee",
      Profile_Picture:
        "https://s.gravatar.com/avatar/63f33e8348ca8f43f5b5703e30446ffe?s=100&r=x&d=retro",
      IsOnline: false,
      IsLocked: false,
      IsActive: false,
      Orders: [],
      id: "65106fa5d3f90bb5d51bb068",
    },
    {
      Email: "taikhoanlmng212@gmail.com",
      Fullname: "Nguyen Van Tan",
      Role: "employee",
      Profile_Picture:
        "https://s.gravatar.com/avatar/e1d8fbbe91e3c27913fa705b45f00474?s=100&r=x&d=retro",
      IsOnline: false,
      IsLocked: false,
      IsActive: false,
      Orders: [],
      id: "65106fbf7007fbe31c01f2e2",
    },
    {
      Email: "taikhoanlmng@gmail.com",
      Fullname: "Nguyen Van Tan",
      Role: "employee",
      Profile_Picture:
        "https://res.cloudinary.com/dfxqz0959/image/upload/v1701189765/cloudImageWebNodejs/avatar/hpton8l6je9olmnaovec.png",
      IsOnline: true,
      IsLocked: false,
      IsActive: true,
      Orders: [],
      id: "6513174510eb38a7e7caa2f7",
    },
    {
      Email: "taikhoan1@gmail.com",
      Fullname: "Nguyen Van Tan",
      Role: "employee",
      Profile_Picture:
        "https://s.gravatar.com/avatar/d83b48fadade7934ac0d17f7d8916b49?s=100&r=x&d=retro",
      IsOnline: false,
      IsLocked: false,
      IsActive: false,
      Orders: [],
      id: "651ac89b5e3dfb59e28db6a8",
    },
    {
      Email: "abc123@gmail.com",
      Fullname: "Nguyen Van Tan",
      Role: "employee",
      Profile_Picture:
        "https://s.gravatar.com/avatar/a751156c43e6349d8eae1f392950df34?s=100&r=x&d=retro",
      IsOnline: false,
      IsLocked: false,
      IsActive: false,
      Orders: [],
      id: "6550ca0fa3cfe37f6a12f7d4",
    },
    // ...
  ];
}

export default function DemoPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = getCookie("token");
    async function fetchProduct() {
      try {
        const response = await axios.get("/api/users", {
          baseURL: "http://localhost:3000",
          headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("🚀 ~ fetchProduct ~ response.data:", response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="px-8 py-10 mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
