"use client";

import Link from "next/link";
import useSignup from "../hooks/useSignup";
import usePasswordToggle from "@/src/hooks/usePasswordToggle";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/src/components/ui/field";
import { cn } from "@/src/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Spinner } from "@/src/components/ui/spinner";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { showPassword, handleTogglePassword } = usePasswordToggle();
  const { loading, formData, handleOnChange, handleOnSubmit } = useSignup();

  return (
    <form
      onSubmit={handleOnSubmit}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Fill in the form below to create your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
          <Input
            id="fullName"
            type="text"
            placeholder="John Doe"
            name="fullName"
            required
            onChange={handleOnChange}
            value={formData.fullName}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            name="email"
            required
            onChange={handleOnChange}
            value={formData.email}
          />
          <FieldDescription>
            We&apos;ll use this to contact you. We will not share your email
            with anyone else.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              required
              onChange={handleOnChange}
              value={formData.password}
            />
            {showPassword ? (
              <EyeOff
                className="absolute top-2 right-2 cursor-pointer"
                size={20}
                onClick={handleTogglePassword}
              />
            ) : (
              <Eye
                className="absolute top-2 right-2 cursor-pointer"
                size={20}
                onClick={handleTogglePassword}
              />
            )}
          </div>
          <FieldDescription>
            Must be at least 8 characters long.
          </FieldDescription>
        </Field>
        <Field>
          <Button
            type="submit"
            disabled={
              loading ||
              !formData.fullName ||
              !formData.email ||
              !formData.password
            }
          >
            {loading ? (
              <>
                <Spinner />
                Signup
              </>
            ) : (
              "Signup"
            )}
          </Button>
        </Field>
        {/* <FieldSeparator>Or continue with</FieldSeparator> */}
        <Field>
          {/* <Button variant="outline" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg>
            Sign up with GitHub
          </Button> */}
          <FieldDescription className="px-6 text-center">
            Already have an account? <Link href="/login">Sign in</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
