"use client";

import Link from "next/link";
import useGetAllProducts from "@/src/modules/dashboard/products/hooks/useGetAllProducts";

import ProductCard from "@/src/modules/dashboard/products/components/product-card";
// import ProductFilter from "@/src/modules/dashboard/products/components/product-filter";

import { Plus } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export default function ProductsPage() {
  const { products } = useGetAllProducts();
  console.log(`products: ${products}`);

  return (
    <div className="space-y-6">
      {/* ---- HEADER ---- */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Products</h1>
        <Button asChild>
          <Link href={"/dashboard/products/addProduct"}>
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Link>
        </Button>
      </div>

      {/* ---- FILTERS ---- */}
      {/* <ProductFilter
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
      /> */}

      {/* ---- PRODUCTS GRID ---- */}
      {Array.isArray(products) && products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>No products found.</p>
        </div>
      )}
    </div>
  );
}
