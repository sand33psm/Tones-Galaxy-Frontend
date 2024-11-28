"use client";

import { useRouter } from "next/navigation"; 
import CardWrapper from "./card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { RegisterSchema } from "../../../schema";

import { REGISTER_API_PATH } from "@/constants";
import { apiClient } from "@/utils/api";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage("");
    try {
      const res = await apiClient.post(REGISTER_API_PATH, {
        username: data.username,
        email: data.email,
        password: data.password,
      });

      if (res.status === 201) {
        router.push("/auth/login");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errors = error.response.data;

        if (errors.username) {
          form.setError("username", {
            type: "manual",
            message: errors.username[0],
          });
        }
        if (errors.email) {
          form.setError("email", {
            type: "manual",
            message: errors.email[0],
          });
        }
        if (errors.password) {
          form.setError("password", {
            type: "manual",
            message: errors.password[0],
          });
        }

        setErrorMessage(errors.message || "An error occurred. Please try again.");
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <CardWrapper
      label="Create an account"
      title="Register"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account? Login here."
    >
      {errorMessage && (
        <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </FormLabel> */}
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter your email"
                      className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Username
                  </FormLabel> */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your username"
                      className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Password
                  </FormLabel> */}
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter your password"
                      className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Confirm Password
                  </FormLabel> */}
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Confirm your password"
                      className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Loading..." : "Register"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;
