"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import { Copy, Edit, MoreHorizontal, SaveAll, Trash } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { AlertModal } from "@/components/modals/alert-modal";
import { ProductColumn } from "./columns";
import { setCookie } from "cookies-next";

interface CellActionProps {
  data: ProductColumn;
}

const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const onCopy = (data: any) => {
    setCookie("customer", data);
    toast.success("Billboard Id copied to the clipboard.");
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {}}
        loading={loading}
      ></AlertModal>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="w-8 h-8 p-0" variant="ghost">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="w-4 h-4"></MoreHorizontal>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => onCopy(data)}
            className="cursor-pointer"
          >
            <SaveAll className="w-4 h-4 mr-2" />
            Save
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => router.push(`/products/${data.id}`)}
            className="cursor-pointer"
          >
            <Edit className="w-4 h-4 mr-2" />
            Update
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setOpen(true)}
            className="cursor-pointer"
          >
            <Trash className="w-4 h-4 mr-2" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default CellAction;
