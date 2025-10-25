"use client";

import Container from "@/components/common/container";
import Section from "@/components/common/section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { useState } from "react";

export default async function ProductDetailsPage() {
  // Sample Product Data (You can replace it with real API data)
  const product = {
    id: 1,
    title: "Vitamin C Tablets - Boost Immunity Naturally",
    description:
      "Vitamin C Tablets are formulated to strengthen your immune system, promote skin health, and improve energy levels. Made with 100% organic ingredients, this supplement helps protect against free radicals and supports overall wellness.",
    price: 24.99,
    discountedPrice: 19.99,
    images: [
      "/assets/medicine-cart.png",
      "/assets/medicine-cart.png",
      "/assets/medicine-cart.png",
    ],
    category: "Vitamins & Supplements",
    stock: 45,
    brand: "Nature's Essentials",
    rating: 4.6,
    reviews: 128,
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section — Product Images */}
          <div>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <Image
                src={selectedImage}
                alt={product.title}
                width={500}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-4 mt-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`border rounded-md overflow-hidden transition-all ${
                    selectedImage === img
                      ? "border-blue-500"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    width={80}
                    height={80}
                    className="object-cover w-20 h-20"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Section — Product Information */}
          <div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-3">
              {product.title}
            </h1>
            <p className="text-sm text-gray-500 mb-2">
              Category:{" "}
              <span className="text-blue-500 font-medium">
                {product.category}
              </span>
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Brand: <span className="font-medium">{product.brand}</span>
            </p>

            {/* Ratings */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400 text-lg">
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))}
              </div>
              <span className="text-gray-500 text-sm">
                ({product.reviews} Reviews)
              </span>
            </div>

            {/* Price Section */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-blue-500">
                ${product.discountedPrice.toFixed(2)}
              </span>
              <span className="text-lg line-through text-gray-400">
                ${product.price.toFixed(2)}
              </span>
              <span className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded">
                Save{" "}
                {Math.round(
                  ((product.price - product.discountedPrice) / product.price) *
                    100
                )}
                %
              </span>
            </div>

            {/* Stock Status */}
            {product.stock > 0 ? (
              <p className="text-green-600 text-sm mb-6">
                In Stock ({product.stock} available)
              </p>
            ) : (
              <p className="text-red-500 text-sm mb-6">Out of Stock</p>
            )}

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Add to Cart Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size={"lg"}>Add to Cart</Button>
              <Button variant={"outline"} size={"lg"}>
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        {/* Product Description / Details Section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Product Description
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Vitamin C is a powerful antioxidant that helps in collagen
            production, wound healing, and protecting your cells from damage.
            Regular use can enhance your immune response, support healthy skin,
            and improve overall vitality. Ideal for adults of all ages seeking
            natural immune support.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            Key Benefits:
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Boosts immunity and natural defense mechanisms.</li>
            <li>Promotes glowing and youthful skin.</li>
            <li>Helps in tissue repair and collagen formation.</li>
            <li>100% organic and safe for daily use.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            Usage Directions:
          </h3>
          <p className="text-gray-600">
            Take 1 tablet daily after a meal or as directed by a healthcare
            professional. Do not exceed the recommended dosage.
          </p>
        </div>
      </Container>
    </Section>
  );
}
