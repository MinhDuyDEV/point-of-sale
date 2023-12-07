"use client";

// import React from "react";

// const SettingPage = () => {
//   return <div></div>;
// };

// export default SettingPage;

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { getCookie } from "cookies-next";

const formSchema = z.object({
  Password: z.string().min(1),
  newPassword: z.string().min(1),
});

type FormValues = z.infer<typeof formSchema>;

export default function SettingPage() {
  const [loading, setLoading] = useState(false);
  const token = getCookie("token");
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Password: "",
      newPassword: "",
    },
  });
  const onSubmit = async (data: FormValues) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    try {
      setLoading(true);
      await axios.patch(`/api/users/profiles/changePassword`, data, {
        baseURL: "http://localhost:3000",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Tabs defaultValue="account" className="w-[900px] mx-auto mt-10">
      <TabsList className="grid w-full grid-cols-3 space-x-4">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="theme">Theme</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you&apos;re
              done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged
              out.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="Password"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel>Current password</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Password..."
                          {...field}
                        ></Input>
                      </FormControl>
                      <FormMessage></FormMessage>
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel>New password</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="New password..."
                          {...field}
                        ></Input>
                      </FormControl>
                      <FormMessage></FormMessage>
                    </FormItem>
                  )}
                ></FormField>

                <CardFooter>
                  <Button disabled={loading} type="submit">
                    Save password
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="theme">
        <Card>
          <CardHeader>
            <CardTitle>Theme</CardTitle>
            <CardDescription>
              Toggle the theme between light and dark mode.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
