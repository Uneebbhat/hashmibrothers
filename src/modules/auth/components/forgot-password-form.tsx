"use client";

import { cn } from "@/src/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form
      // onSubmit={handleOnSubmit}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Forgot Password</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email to get the password reset link{" "}
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            name="email"
            required
            // onChange={handleOnChange}
            // value={formData.email}
          />
        </Field>
        <Field>
          <Button
            type="submit"
            // disabled={loading || !formData.email || !formData.password}
          >
            {/* {loading ? (
              <>
                <Spinner />
                Send email
              </>
            ) : (
              "Send email"
            )} */}
            Send email
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
