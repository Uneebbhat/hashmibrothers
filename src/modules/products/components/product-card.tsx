"use client";

import Image from "next/image";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { ProductCardProps } from "../types/ProductTypes";

export default function ProductCard({
  imageSrc,
  productTitle,
  productDescription,
  quantity,
  price,
  inStock,
}: ProductCardProps) {
  const [count, setCount] = useState(1);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  return (
    <Card className="group transition-shadow duration-300">
      {/* Product Link Area */}
      <CardHeader className="flex flex-col items-center justify-center cursor-pointer">
        <Image
          src={imageSrc}
          alt={productTitle}
          width={200}
          height={200}
          priority
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </CardHeader>

      <CardContent className="space-y-2 cursor-pointer">
        <CardTitle className="text-lg font-semibold text-gray-800">
          {productTitle}
        </CardTitle>
        <p className="text-sm text-gray-500">{productDescription}</p>
        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <span className="font-medium text-gray-700">Quantity:</span>{" "}
            {quantity}
          </p>
          <p>
            <span className="font-medium text-gray-700">In Stock:</span>{" "}
            {inStock}
          </p>
          <p>
            <span className="font-medium text-gray-700">Price:</span>{" "}
            <span className="text-blue-600 font-semibold">Rs {price}</span>
          </p>
        </div>
      </CardContent>

      {/* Independent Button (Separate Link) */}
      <CardFooter className="flex justify-between">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold transition">
          Add to Cart
        </Button>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="w-8 h-8 font-bold text-lg flex items-center justify-center"
            onClick={handleDecrease}
          >
            -
          </Button>

          <Input
            type="number"
            min={1}
            value={count}
            className="w-16 text-center"
          />

          <Button
            variant="outline"
            className="w-8 h-8 font-bold text-lg flex items-center justify-center"
            onClick={handleIncrease}
          >
            +
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
