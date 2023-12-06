"use client";

import * as z from "zod";
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import Heading from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Customer } from "@/types/general.types";
import { AlertModal } from "@/components/modals/alert-modal";
import ImageUpload from "@/components/ui/image-upload";
import { getCookie } from "cookies-next";

const formSchema = z.object({
  FullName: z.string().min(1),
  PhoneNumber: z.string().min(1),
  Address: z.string().min(1),
});

type CustomerFormValues = z.infer<typeof formSchema>;

interface CustomerFormProps {
  initialData: Customer | null;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ initialData }) => {
  console.log("🚀 ~ initialData:", initialData);
  const token = getCookie("token");
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const title = initialData ? "Edit" : "Create product";
  const description = initialData ? "Edit a product" : "Add a new product";
  const toastMessage = initialData ? "Customer updated" : "Customer created";
  const action = initialData ? "Save changes" : "Create";

  const form = useForm<CustomerFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      FullName: "",
      PhoneNumber: "",
      Address: "",
    },
  });
  const onSubmit = async (data: CustomerFormValues) => {
    try {
      setLoading(true);
      // if (initialData) {
      //   await axios.patch(`/api/products/${params.productId}`, data, {
      //     baseURL: "http://localhost:3000",
      //     headers: {
      //       "Content-Type": "Application/json",
      //       Authorization: `Bearer ${token}`,
      //     },
      //   });
      // } else {
      //   await axios.post(`/api/products`, data, {
      //     baseURL: "http://localhost:3000",
      //     headers: {
      //       "Content-Type": "Application/json",
      //       Authorization: `Bearer ${token}`,
      //     },
      //   });
      // }
      console.log("🚀 ~ onSubmit ~ data:", data);
      router.refresh();
      toast.success(toastMessage);
      router.push(`/products`);
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/products/${params.productId}`, {
        baseURL: "http://localhost:3000",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      router.refresh();
      toast.success("Customer deleted.");
      router.push(`/products`);
    } catch (error) {
      toast.error(
        "Make sure you removed all categories using this product first."
      );
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };
  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      ></AlertModal>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description}></Heading>
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="icon"
            onClick={() => {
              setOpen(true);
            }}
          >
            <Trash className="w-4 h-4" />
          </Button>
        )}
      </div>
      <Separator></Separator>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8"
        >
          <FormField
            control={form.control}
            name="FullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customer name</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Name..."
                    {...field}
                  ></Input>
                </FormControl>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          ></FormField>
          <div className="grid grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="PhoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Customer name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Name..."
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="Address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Customer category</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Category..."
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            ></FormField>
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default CustomerForm;
