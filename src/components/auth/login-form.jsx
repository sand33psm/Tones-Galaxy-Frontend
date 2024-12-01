"use client";

import { useRouter } from "next/navigation";
import CardWrapper from "./card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { LoginSchema } from "../../../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { apiClient } from "@/utils/api";
import { LOGIN_API_PATH } from "@/constants";
import Cookies from "js-cookie"; // Import Cookies
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      usernameOrEmail: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage(""); // Reset error message on each submit
    try {
      const { usernameOrEmail, password } = data;
      const res = await apiClient.post(LOGIN_API_PATH, { username: usernameOrEmail, password });

      // Set tokens in cookies
      Cookies.set(ACCESS_TOKEN, res.data.access, { secure: false, sameSite: "strict", path: "/" });
      Cookies.set(REFRESH_TOKEN, res.data.refresh, { secure: false, sameSite: "strict", path: "/" });

      // Access token from cookies
      const token = Cookies.get(ACCESS_TOKEN);

      router.push("/ringtones");
    } catch (error) {
      console.log("ERROR -> ", error.response.data.error);
      if (error.response && error.response.data) {
        const errors = error.response.data;

        // Set specific field errors
        if (errors.usernameOrEmail) {
          form.setError("usernameOrEmail", {
            type: "manual",
            message: error.response.data.error,
          });
        }
        if (errors.password) {
          form.setError("password", {
            type: "manual",
            message: error.response.data.error,
          });
        }

        setErrorMessage(error.response.data.error || "An error occurred. Please try again.");
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <CardWrapper
      label="Login to your account"
      title="Login"
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account? Register here."
    >
      {errorMessage && (
        <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
      )}
      
      {loading && <div className="text-gray-500 text-sm mb-4">Loading...</div>}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="usernameOrEmail"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Username or Email"
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
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Password"
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
            {loading ? "Loading..." : "Login"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
