"use client";

import { useRouter } from "next/router";

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
import { useEffect, useState } from "react";
import { RegisterSchema } from "../../../schema";
import { useFormStatus } from "react-dom";

import { ACCESS_TOKEN, REFRESH_TOKEN, REGISTER_API_PATH } from "@/constants";
import { apiClient } from "@/utils/api";


const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // const router = useRouter()
  
  useEffect(()=>{

  }, [])
  
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
    setErrorMessage(""); // Clear any previous errors
    try {
      const res = await apiClient.post(REGISTER_API_PATH, {
        username: data.username,
        email: data.email,
        password: data.password,
      });

      localStorage.setItem(ACCESS_TOKEN, res.data.access)
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
      
      if (res.status == 201){
        console.log("Account created successfully");
      }
      // useRouter().push("/auth/login")
      // Handle success, e.g., redirect to login or home page
    } catch (error) {
      // console.error("ERROR ---> ",error);
      if (error.response && error.response.data) {
        const errors = error.response.data;

        // Check for specific error messages related to username, email, or password
        if (errors.username) {
          form.setError("username", {
            type: "manual",
            message: errors.username[0], // First error message for username
          });
        }
        if (errors.email) {
          form.setError("email", {
            type: "manual",
            message: errors.email[0], // First error message for email
          });
        }
        if (errors.password) {
          form.setError("password", {
            type: "manual",
            message: errors.password[0], // First error message for password
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

  const { pending } = useFormStatus();

  return (
    <CardWrapper
      label="Create an account"
      title="Register"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account? Login here."
    >
      {/* Display the error message if it exists */}
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="abc@gmail.com"
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
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="John Doe" />
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
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
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full bg-medium dark:bg-white" disabled={pending}>
            {loading ? "Loading..." : "Register"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;
