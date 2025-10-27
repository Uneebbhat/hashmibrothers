"use client";

import Section from "@/src/components/common/section";
import Container from "@/src/components/common/container";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/src/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Button } from "@/src/components/ui/button";
import { Separator } from "@/src/components/ui/separator";
import { Field, FieldGroup } from "@/src/components/ui/field";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    role: "User",
  });

  return (
    <Section>
      <Container>
        <div className="flex flex-col md:flex-row gap-6">
          {/* --- Left Side: Profile Summary --- */}
          <Card className="w-full md:w-1/3 p-4 flex flex-col justify-center">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/assets/avatar.png" alt="User avatar" />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>

            <CardHeader className="text-center space-y-1 mt-3">
              <CardTitle>{user.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{user.email}</p>
              <p className="text-xs text-muted-foreground">Role: {user.role}</p>
            </CardHeader>

            <CardFooter className="flex flex-col gap-2 w-full">
              <Button className="w-full">Edit Picture</Button>
              <Button variant="destructive" className="w-full">
                Delete Account
              </Button>
            </CardFooter>
          </Card>

          {/* --- Right Side: Editable Form --- */}
          <Card className="w-full md:w-2/3 p-6">
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Group 1: Basic Info */}
              <FieldGroup>
                <Field>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    defaultValue={user.name}
                    placeholder="Enter your name"
                  />
                </Field>

                <Field>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue={user.email}
                    placeholder="Enter your email"
                  />
                </Field>
              </FieldGroup>

              <Separator />

              {/* Group 2: Password Fields */}
              <FieldGroup>
                <Field>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter new password"
                  />
                </Field>

                <Field>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm new password"
                  />
                </Field>
              </FieldGroup>
            </CardContent>

            <CardFooter>
              <Button className="w-full md:w-auto">Update Profile</Button>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
