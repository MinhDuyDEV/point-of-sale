"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";

export type OrderColumn = {
  AmountPaidByCustomer: number;
  ChangeReturnedToCustomer: number;
  Customer: string;
  TotalAmount: number;
  OrderDetails: number;
  Quantity: number;
  id: string;
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
    accessorKey: "Quantity",
    header: "Quantity",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("OrderDetails")}</div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
