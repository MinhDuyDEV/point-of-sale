"use client";

import { useEffect, useState } from "react";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";

import Summary from "./summary";
import CartItem from "./cart-item";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { ScanBarcode } from "lucide-react";

const formSchema = z.object({
  Fullname: z.string().min(2, {
    message: "Please enter your full name.",
  }),
  PhoneNumber: z.string().min(2, {
    message: "Please enter a valid phone number.",
  }),
  Address: z.string().min(2, {
    message: "Address must be at least 2 characters.",
  }),
  AmountPaidByCustomer: z.number(),
  TotalAmount: z.number(),
});

export const revalidate = 0;

const CartPage = () => {
  const cart = useCart();
  const totalPrice = cart.items.reduce((total, item) => {
    return total + Number(item.RetailPrice) * item.Flag;
  }, 0);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Fullname: "",
      PhoneNumber: "",
      Address: "",
      AmountPaidByCustomer: totalPrice || 0,
      TotalAmount: totalPrice || 0,
    },
  });
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("🚀 ~ CartPage ~ cart:", cart.items);

    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.push("/payment");
  }
  return (
    <div className="bg-white">
      <Container>
        <div className="flex items-start justify-center gap-28">
          <div className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-black">Order summary</h2>
            <div className="mt-12 lg:grid lg:items-start gap-x-12">
              <Summary />
            </div>
          </div>
          <div className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-black">
              Contact information
            </h2>
            <div className="mt-12 lg:grid lg:items-start gap-x-12">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between gap-5">
                    <FormField
                      control={form.control}
                      name="Fullname"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="PhoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="Address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex items-center justify-between gap-5">
                    <FormField
                      control={form.control}
                      name="TotalAmount"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Total Amount</FormLabel>
                          <FormControl>
                            <Input placeholder="Total amount" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="AmountPaidByCustomer"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>AmountPaidByCustomer</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="AmountPaidByCustomer"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    disabled={cart.items.length === 0}
                    className="flex items-center w-full gap-2 mt-6"
                  >
                    <ScanBarcode />
                    Confirm order
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;