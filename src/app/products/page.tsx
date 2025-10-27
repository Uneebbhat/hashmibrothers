"use client";

import Section from "@/src/components/common/section";
import Container from "@/src/components/common/container";
import ProductCard from "@/src/modules/products/components/product-card";
import CategoryFilters from "@/src/modules/products/components/category-filters";
import ProductCardSkeleton from "@/src/modules/products/components/product-skeleton";

import { useState, Suspense } from "react";
import { Button } from "@/src/components/ui/button";

export default function ProductsPage() {
  // Total products for now (mock data)
  const totalProducts = 200;

  // State to control visible products
  const [visibleCount, setVisibleCount] = useState(30);

  // Function to load more products
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 30);
  };

  // Generate mock data
  const products = Array.from({ length: totalProducts }).map((_, index) => ({
    id: index,
    imageSrc: "/assets/medicine-cart.png",
    productTitle: `Paracetamol 500mg ${index + 1}`,
    productDescription: "Pain Relief Medicine",
    quantity: "500ml",
    price: 500,
    inStock: 45,
  }));

  return (
    <Section>
      <Container>
        {/* Header */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between">
          <CategoryFilters />
          <p className="text-sm text-muted-foreground">
            Showing {visibleCount} of {totalProducts} products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.length === 0 ? (
            <p>No products available.</p>
          ) : (
            products.slice(0, visibleCount).map((product) => (
              <Suspense fallback={<ProductCardSkeleton />} key={product.id}>
                <ProductCard
                  imageSrc={product.imageSrc}
                  productTitle={product.productTitle}
                  productDescription={product.productDescription}
                  quantity={product.quantity}
                  price={product.price}
                  inStock={product.inStock}
                />
              </Suspense>
            ))
          )}
        </div>

        {/* Load More Button */}
        {visibleCount < totalProducts && (
          <div className="flex justify-center mt-10">
            <Button onClick={handleLoadMore}>Load More</Button>
          </div>
        )}
      </Container>
    </Section>
  );
}
