"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Product } from "@/types/general.types";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "Barcode",
    header: "Barcode",
  },
  {
    accessorKey: "Name",
    header: "Name",
  },
  {
    accessorKey: "ImportPrice",
    header: "ImportPrice",
  },
  {
    accessorKey: "RetailPrice",
    header: "RetailPrice",
  },
  {
    accessorKey: "Category",
    header: "Category",
  },
  {
    accessorKey: "Quantity",
    header: "Quantity",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router = useRouter();
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(product._id)}
            >
              Copy product ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => router.push(`/products/${product._id}`)}
            >
              View product details
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
