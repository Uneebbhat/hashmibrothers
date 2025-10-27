import Link from "next/link";
import Image from "next/image";
import Section from "@/src/components/common/section";
import ProductCard from "@/src/modules/products/components/product-card";
import Container from "@/src/components/common/container";
import ProductCardSkeleton from "@/src/modules/products/components/product-skeleton";

import { Suspense } from "react";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";

export default function Home() {
  return (
    <>
      <Section>
        <Container>
          <div className="bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 text-white flex flex-col md:flex-row items-center justify-between rounded-xl p-6 md:p-10 shadow-lg">
            {/* Left Content */}
            <div className=" md:text-left space-y-4 max-w-xl">
              <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Hashmi Brother&apos;s Pharmacy
              </h1>
              <p className="text-sm sm:text-base lg:text-lg">
                Upload your prescription and we&apos;ll prepare your order with
                care and precision.
              </p>
              <div>
                <Button className="bg-white text-blue-500 hover:bg-white/90 font-semibold mt-2">
                  Order Now
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="mt-8 md:mt-0">
              <Image
                src="/assets/medicine-cart.png"
                alt="Medicine Cart"
                width={280}
                height={280}
                className="drop-shadow-lg object-contain"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-3xl font-semibold">
                Popular Products
              </h2>
              <Button variant={"link"} asChild>
                <Link href={"/products"}>View all</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 3 }).map((_, index) => (
                <Suspense fallback={<ProductCardSkeleton />}>
                  <ProductCard
                    key={index}
                    imageSrc="/assets/medicine-cart.png"
                    productTitle={`Paracetamol 500mg ${index + 1}`}
                    productDescription="Pain Relief Medicine"
                    quantity="500ml"
                    price={500}
                    inStock={45}
                  />
                </Suspense>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-3xl font-semibold">
                Daily Well-being
              </h2>
              <Button variant={"link"} asChild>
                <Link href={"/category/lifestyle-fitness"}>View all</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 3 }).map((_, index) => (
                <Suspense fallback={<ProductCardSkeleton />}>
                  <ProductCard
                    key={index}
                    imageSrc="/assets/medicine-cart.png"
                    productTitle={`Paracetamol 500mg ${index + 1}`}
                    productDescription="Pain Relief Medicine"
                    quantity="500ml"
                    price={500}
                    inStock={45}
                  />
                </Suspense>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col gap-8">
            {/* Header Section */}
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-3 text-xl md:text-3xl font-semibold">
                Special Offers
                <Badge
                  variant="destructive"
                  className="w-10 h-10 flex items-center justify-center text-lg"
                >
                  %
                </Badge>
              </h2>
              <Button variant="link" asChild>
                <Link
                  href="/category/ayurvedic-herbal"
                  className="text-primary hover:underline"
                >
                  View all
                </Link>
              </Button>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 3 }).map((_, index) => (
                <Suspense fallback={<ProductCardSkeleton />}>
                  <ProductCard
                    key={index}
                    imageSrc="/assets/medicine-cart.png"
                    productTitle={`Paracetamol 500mg ${index + 1}`}
                    productDescription="Pain Relief Medicine"
                    quantity="500ml"
                    price={500}
                    inStock={45}
                  />
                </Suspense>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-3xl font-semibold">
                Homeopathic & Herbal Products
              </h2>
              <Button variant={"link"} asChild>
                <Link href={"/category/ayurvedic-herbal"}>View all</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 3 }).map((_, index) => (
                <Suspense fallback={<ProductCardSkeleton />}>
                  <ProductCard
                    key={index}
                    imageSrc="/assets/medicine-cart.png"
                    productTitle={`Paracetamol 500mg ${index + 1}`}
                    productDescription="Pain Relief Medicine"
                    quantity="500ml"
                    price={500}
                    inStock={45}
                  />
                </Suspense>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-3xl font-semibold">
                Medical Equipments
              </h2>
              <Button variant={"link"} asChild>
                <Link href={"/category/medical-equipment"}>View all</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 3 }).map((_, index) => (
                <Suspense fallback={<ProductCardSkeleton />}>
                  <ProductCard
                    key={index}
                    imageSrc="/assets/medicine-cart.png"
                    productTitle={`Paracetamol 500mg ${index + 1}`}
                    productDescription="Pain Relief Medicine"
                    quantity="500ml"
                    price={500}
                    inStock={45}
                  />
                </Suspense>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
