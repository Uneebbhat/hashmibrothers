"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Edit, Trash2 } from "lucide-react";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import useDeleteProduct from "@/src/modules/dashboard/products/hooks/useDeleteProduct";

interface ProductCardProps {
  productImage: string;
  productName: string;
  inStock: number;
  price: number;
  id: string;
}

export default function ProductCard({
  product,
}: {
  product: ProductCardProps;
}) {
  const { mutate: deleteProduct, isPending } = useDeleteProduct();

  const handleDelete = () => {
    const confirmDelete = confirm(
      `Are you sure you want to delete "${product.productName}"?`
    );
    if (confirmDelete) {
      deleteProduct(product.id);
    }
  };

  return (
    <Card className="group transition-shadow duration-300" key={product.id}>
      <CardHeader className="flex flex-col items-center justify-center cursor-pointer h-full">
        <Image
          src={product.productImage}
          alt={product.productName}
          width={200}
          height={200}
          priority
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </CardHeader>

      <CardContent className="space-y-2 cursor-pointer">
        <CardTitle className="text-lg font-semibold text-gray-800">
          {product.productName}
        </CardTitle>
        <p className="text-sm text-gray-500">Pain killer</p>
        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <span className="font-medium text-gray-700">In Stock:</span>{" "}
            {product.inStock}
          </p>
          <p>
            <span className="font-medium text-gray-700">Price:</span>{" "}
            <span className="text-blue-600 font-semibold">
              Rs {product.price}
            </span>
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
        <Badge
          variant="secondary"
          className={
            product.inStock > 0
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }
        >
          {product.inStock > 0
            ? `In Stock (${product.inStock})`
            : "Out of Stock"}
        </Badge>

        <div className="space-x-2 flex items-center">
          <Button variant="outline">
            <Edit className="mr-1 w-4 h-4" />
            Edit
          </Button>

          <Button
            variant="destructive"
            disabled={isPending}
            onClick={handleDelete}
          >
            <Trash2 className="mr-1 w-4 h-4" />
            {isPending ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
