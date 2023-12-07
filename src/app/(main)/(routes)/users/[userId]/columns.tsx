"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";

export type OrderColumn = {
  AmountPaidByCustomer: number;
  ChangeReturnedToCustomer: number;
  Customer: string;
  TotalAmount: number;
  OrderDetails: [];
  _id: string;
};

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "Customer",
    header: "Customer",
  },
  {
    accessorKey: "AmountPaidByCustomer",
    header: "AmountPaidByCustomer",
  },
  {
    accessorKey: "ChangeReturnedToCustomer",
    header: "ReturnedToCustomer",
  },
  {
    accessorKey: "createdAt",
    header: "createdAt",
  },
  {
    accessorKey: "OrderDetails",
    header: "Quantity",
    cell: ({ row }) => <div className="lowercase">test</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
