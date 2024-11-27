import { z } from 'zod';

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  username: z.string().min(1, {
    message: "Please enter your username",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
  confirmPassword: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"], // this will associate the error with the confirmPassword field
});

export const LoginSchema = z.object({
  usernameOrEmail: z
    .string()
    .min(1, { message: "Please enter your username or email address" })
    .refine((value) => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value) || /^[a-zA-Z0-9_]+$/.test(value), {
      message: "Please enter a valid email address or username",
    }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});
