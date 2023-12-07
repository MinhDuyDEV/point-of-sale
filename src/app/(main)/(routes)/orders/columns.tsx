"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";

export type OrderColumn = {
  AmountPaidByCustomer: number;
  ChangeReturnedToCustomer: number;
  Customer: string;
  TotalAmount: number;
  OrderDetails: [];
  OrderDetailSize: number;
  Quantity: number;
  CustomerName: string;
  id: string;
};

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "CustomerName",
    header: "Customer",
    cell: ({ row }) => <div>{row.getValue("CustomerName")}</div>,
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
    accessorKey: "OrderDetailSize",
    header: "Product",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("OrderDetailSize")}</div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
