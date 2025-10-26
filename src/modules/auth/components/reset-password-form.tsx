"use client";

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
// import { Spinner } from "@/src/components/ui/spinner";

export function ResetPasswordForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { showPassword, handleTogglePassword } = usePasswordToggle();

  return (
    <form
      // onSubmit={handleOnSubmit}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Reset Password</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your new password and login again
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              required
              // onChange={handleOnChange}
              // value={formData.password}
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
            // disabled={loading || !formData.email || !formData.password}
          >
            {/* {loading ? (
              <>
                <Spinner />
                Reset password
              </>
            ) : (
              "Reset password"
            )} */}
            Reset password
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
