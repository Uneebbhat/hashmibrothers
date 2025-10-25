import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

interface ProductCardProps {
  imageSrc: string;
  productTitle: string;
  productDescription: string;
  quantity: string;
  price: number;
  inStock: number;
}

export default async function ProductCard({
  imageSrc,
  productTitle,
  productDescription,
  quantity,
  price,
  inStock,
}: ProductCardProps) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <Card className="group transition-shadow duration-300">
      {/* Product Link Area */}
      <Link
        href={`/category/${productTitle.toLowerCase().replace(/\s+/g, "-")}`}
      >
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
      </Link>

      {/* Independent Button (Separate Link) */}
      <CardFooter className="flex justify-center">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
