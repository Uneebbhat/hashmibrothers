"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/src/components/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
} from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Button } from "@/src/components/ui/button";
import { Separator } from "@/src/components/ui/separator";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/src/components/ui/select";
import Container from "@/src/components/common/container";
import Section from "@/src/components/common/section";
import { useState } from "react";
import { Check } from "lucide-react";

export default function CheckoutPage() {
  const [success, setSuccess] = useState(false);

  const handleCheckout = () => {
    setSuccess(true);
  };
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Billing & Shipping Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* === Billing Information === */}
            <Card>
              <CardHeader>
                <CardTitle>Billing Information</CardTitle>
              </CardHeader>
              <CardContent>
                <FieldGroup>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                      <Input id="firstName" placeholder="John" />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                      <Input id="lastName" placeholder="Doe" />
                    </Field>
                  </div>

                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+92 300 1234567"
                    />
                  </Field>
                </FieldGroup>
              </CardContent>
            </Card>

            {/* === Shipping Address === */}
            <Card>
              <CardHeader>
                <CardTitle>Shipping Address</CardTitle>
              </CardHeader>
              <CardContent>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="address">Address</FieldLabel>
                    <Textarea
                      id="address"
                      placeholder="123 Street, City, Country"
                    />
                    <FieldDescription>
                      Please provide your full delivery address.
                    </FieldDescription>
                  </Field>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel htmlFor="city">City</FieldLabel>
                      <Input id="city" placeholder="Lahore" />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="postalCode">Postal Code</FieldLabel>
                      <Input id="postalCode" placeholder="54000" />
                    </Field>
                  </div>

                  <Field>
                    <FieldLabel>Province</FieldLabel>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Province" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="punjab">Punjab</SelectItem>
                        <SelectItem value="sindh">Sindh</SelectItem>
                        <SelectItem value="kpk">KPK</SelectItem>
                        <SelectItem value="balochistan">Balochistan</SelectItem>
                        <SelectItem value="gilgit">Gilgit Baltistan</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                </FieldGroup>
              </CardContent>
            </Card>
          </div>

          {/* === Order Summary === */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Paracetamol 500mg x 2</span>
                  <span>Rs. 1000</span>
                </div>
                <div className="flex justify-between">
                  <span>Ibuprofen 200mg x 1</span>
                  <span>Rs. 700</span>
                </div>

                <Separator />

                <div className="flex justify-between font-medium">
                  <span>Subtotal</span>
                  <span>Rs. 1700</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>Rs. 200</span>
                </div>

                <Separator />

                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>Rs. 1900</span>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-2">
                {success ? (
                  <Button className="w-full bg-green-500" disabled>
                    <Check />
                  </Button>
                ) : (
                  <Button className="w-full" onClick={handleCheckout}>
                    Place Order (Cash on Delivery)
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
