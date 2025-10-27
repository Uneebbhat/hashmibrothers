"use client";

import Image from "next/image";
import Section from "@/src/components/common/section";
import Container from "@/src/components/common/container";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  inStock: number;
}

export default function CartPage() {
  // Mock data for cart (you can replace with Zustand store later)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Paracetamol 500mg",
      price: 250,
      quantity: 2,
      image: "/assets/medicine-cart.png",
      inStock: 45,
    },
    {
      id: "2",
      name: "Vitamin C Tablets",
      price: 400,
      quantity: 1,
      image: "/assets/medicine-cart.png",
      inStock: 30,
    },
  ]);

  const handleQuantityChange = (id: string, type: "inc" | "dec") => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? Math.min(item.quantity + 1, item.inStock)
                  : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 1000 ? 0 : 150;
  const total = subtotal + deliveryFee;

  return (
    <Section>
      <Container>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Cart Items */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

            {cartItems.length === 0 ? (
              <div className="text-center py-16 border rounded-lg">
                <Image
                  src="/assets/empty-cart.png"
                  alt="Empty cart"
                  width={150}
                  height={150}
                  className="mx-auto mb-4 opacity-80"
                />
                <p className="text-muted-foreground text-lg">
                  Your cart is empty
                </p>
                <Button asChild className="mt-4">
                  <a href="/products">Continue Shopping</a>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border rounded-lg p-4 shadow-sm hover:shadow-md transition"
                  >
                    {/* Product Info Section */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:w-auto">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={90}
                        height={90}
                        className="rounded-lg object-cover w-full sm:w-[90px] sm:h-[90px]"
                      />

                      <div className="flex-1">
                        <h3 className="font-medium text-lg">{item.name}</h3>
                        <Badge
                          variant="secondary"
                          className="text-xs mt-1 sm:mt-0"
                        >
                          In Stock: {item.inStock}
                        </Badge>
                        <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                          Rs. {item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Action Section */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full sm:w-auto gap-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleQuantityChange(item.id, "dec")}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-6 text-center font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleQuantityChange(item.id, "inc")}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Item Total */}
                      <p className="text-right sm:w-24 font-medium text-sm sm:text-base">
                        Rs. {(item.price * item.quantity).toLocaleString()}
                      </p>

                      {/* Remove */}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveItem(item.id)}
                        className="self-end sm:self-auto"
                      >
                        <Trash2 className="w-5 h-5 text-red-500" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Side - Summary */}
          {cartItems.length > 0 && (
            <div className="lg:w-1/3 w-full border rounded-lg p-6 shadow-md h-fit">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>
                    {deliveryFee === 0 ? (
                      <Badge variant="secondary">Free</Badge>
                    ) : (
                      `Rs. ${deliveryFee}`
                    )}
                  </span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold text-base">
                  <span>Total</span>
                  <span>Rs. {total.toLocaleString()}</span>
                </div>
              </div>

              <Button className="w-full mt-6" asChild>
                <Link href={"/cart/checkout"}>Checkout</Link>
              </Button>

              <p className="text-xs text-muted-foreground mt-3 text-center">
                Cash on Delivery available for all orders
              </p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
