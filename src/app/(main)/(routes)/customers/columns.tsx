"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";
import { cn } from "@/lib/utils";
import { Save, ShieldCheck, ShieldX } from "lucide-react";
import toast from "react-hot-toast";

export type ProductColumn = {
  FullName: string;
  PhoneNumber: string;
  Address: string;
  id: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "FullName",
    header: "FullName",
  },
  {
    accessorKey: "PhoneNumber",
    header: "PhoneNumber",
  },
  {
    accessorKey: "Address",
    header: "Address",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];