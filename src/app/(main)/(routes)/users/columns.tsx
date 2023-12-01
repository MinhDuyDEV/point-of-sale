"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { User } from "@/types/general.types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import CellAction from "./cell-action";

export type UserColumn = {
  Email: string;
  Fullname: string;
  IsActive: boolean;
  IsLocked: boolean;
  IsOnline: boolean;
  Orders: [];
  Profile_Picture: string;
  Role: string;
  id: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "Profile_Picture",
    header: "Avatar",
    cell: ({ row }) => (
      <Image
        src={row.getValue("Profile_Picture")}
        height={30}
        width={30}
        className="object-cover rounded-full"
        alt="..."
      ></Image>
    ),
  },
  {
    accessorKey: "Fullname",
    header: "Fullname",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Fullname")}</div>
    ),
  },
  {
    accessorKey: "Email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("Email")}</div>,
  },
  {
    accessorKey: "Role",
    header: "Role",
    cell: ({ row }) => <div className="lowercase">{row.getValue("Role")}</div>,
  },
  {
    accessorKey: "IsActive",
    header: "IsActive",
    cell: ({ row }) => (
      <div
        className={cn(
          "capitalize w-fit p-1 rounded-md",
          row.getValue("IsActive") === true ? "bg-green-500" : "bg-red-500"
        )}
      >
        {row.getValue("IsActive") === true ? "Active" : "Inactive"}
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
